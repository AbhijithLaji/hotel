using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BookDb>(opt => opt.UseInMemoryDatabase("Booking"));
builder.Services.AddCors(option=>option.AddDefaultPolicy(
    option=>option.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()
));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();
app.UseCors();

app.MapGet("/", () => "Hello World!");

//Booking 
app.MapGet("/booking", async (BookDb db) =>
    await db.Books.ToListAsync());

app.MapGet("/booking/{id}", async (int id, BookDb db) =>
    await db.Books.FindAsync(id)
        is Book book
            ? Results.Ok(book)
            : Results.NotFound());

app.MapPost("/booking", async (Book book, BookDb db) =>
{
    db.Books.Add(book);
    await db.SaveChangesAsync();

    return Results.Created($"/rooms/{book.Id}", book);
});


app.Run();

class Book{
    public int Id{get;set;}
    public string? GuestLastName{get;set;}
    public string? GuestFirstName{get;set;}
     public string? CheckInDate{get;set;}
    public string? CheckOutDate{get;set;}
    public int NumberAdults{get;set;}
    public int NumberChild{get;set;}
}
class BookDb : DbContext{
    public BookDb(DbContextOptions<BookDb> options): base(options){}

    public DbSet<Book> Books=>Set<Book>();
}
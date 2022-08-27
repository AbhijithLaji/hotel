using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(option=>option.AddDefaultPolicy(
    option=>option.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()
));
builder.Services.AddDbContext<TodoDb>(opt => opt.UseInMemoryDatabase("Rooms"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();
app.UseCors();
app.MapGet("/", () => "Hello World!");

app.MapGet("/rooms", async (TodoDb db) =>
    await db.Todos.ToListAsync());

app.MapGet("/rooms/{id}", async (int id, TodoDb db) =>
    await db.Todos.FindAsync(id)
        is Todo todo
            ? Results.Ok(todo)
            : Results.NotFound());

app.MapPost("/rooms", async (Todo todo, TodoDb db) =>
{
    db.Todos.Add(todo);
    await db.SaveChangesAsync();

    return Results.Created($"/rooms/{todo.Id}", todo);
});

app.MapPut("/rooms/{id}", async (int id, Todo inputTodo, TodoDb db) =>
{
    var todo = await db.Todos.FindAsync(id);

    if (todo is null) return Results.NotFound();

    todo.Roomno = inputTodo.Roomno;
    todo.Adults = inputTodo.Adults;
    todo.Children = inputTodo.Children;
    todo.Price = inputTodo.Price;


    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/rooms/{id}", async (int id, TodoDb db) =>
{
    if (await db.Todos.FindAsync(id) is Todo todo)
    {
        db.Todos.Remove(todo);
        await db.SaveChangesAsync();
        return Results.Ok(todo);
    }

    return Results.NotFound();
});

app.Run();

class Todo
{
    public int Id { get; set; }
    public int Roomno { get; set; }
    public int Adults { get; set; }
    public int Children { get; set; }
    public int Price { get; set; }
}

class TodoDb : DbContext
{
    public TodoDb(DbContextOptions<TodoDb> options)
        : base(options) { }

    public DbSet<Todo> Todos => Set<Todo>();
}
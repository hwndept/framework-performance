var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://0.0.0.0:3000");

var app = builder.Build();

app.MapGet("/", () => "Hello!");
app.MapGet("/{name}", (string name) => $"Hello {name}!");

app.Run();

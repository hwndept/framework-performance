var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://0.0.0.0:3000");

var app = builder.Build();

app.MapGet("/hello", () => "Hello!");
app.MapGet("/hello/{name}", (string name) => $"Hello {name}!");

app.Run();

using System.Globalization;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://0.0.0.0:3000");

var app = builder.Build();

int factorial(int num)
{
    if (num == 0)
    {
        return 1;
    }
    else
    {
        return num * factorial(num - 1);
    }
}

app.MapGet("/hello", () => "Hello!");
app.MapGet("/hello/{name}", (string name) => $"Hello {name}!");
app.MapGet("/factorial/{num}", (int num) => factorial(num));

app.Run();

using BibliotecaPublica.Core.Models;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Radzen;

namespace Tools.Client;

public class Program
{
    public static async Task Main( string[] args )
    {
        var builder = WebAssemblyHostBuilder.CreateDefault( args );

        builder.RootComponents.Add<App>( "#app" );
        builder.RootComponents.Add<HeadOutlet>( "head::after" );

        builder.Configuration.InjectConfiguration();

        builder.Services
            .InjectClients()
            .AddRadzenComponents()
            .AddScoped<IToolsClient, ToolsClient>();

        var app = builder.Build();

        await app.RunAsync();
    }
}
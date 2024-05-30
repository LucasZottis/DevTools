﻿namespace ConPro.Client;

public static class HealthChecker
{
    public static bool Online { get; private set; }

    public async static Task<bool> CheckAsync( HttpClient client )
    {
        try
        {
            var response = await client.GetAsync( "HealthCheck" );

            Online = response.IsSuccessStatusCode;
            return response.IsSuccessStatusCode;
        }
        catch
        {
            Online = false;
            return false;
        }
    }

    public static bool Check( HttpClient client )
    {
        try
        {
            var response = client.GetAsync( "HealthCheck" ).Sync();

            Online = response.IsSuccessStatusCode;
            return response.IsSuccessStatusCode;
        }
        catch
        {
            Online = false;
            return false;
        }
    }
}
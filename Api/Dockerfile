#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY [".", "."]
RUN dotnet restore "./ConPro.Web/ConPro.Web.Api/ConPro.Web.Api.csproj"
COPY . .
WORKDIR "/src/ConPro.Web/ConPro.Web.Api"
RUN dotnet build "ConPro.Web.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ConPro.Web.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS="http://*:$PORT" dotnet ConPro.Web.Api.dll
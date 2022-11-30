#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ProyectoSophos/ProyectoSophos.csproj", "ProyectoSophos/"]
RUN dotnet restore "ProyectoSophos/ProyectoSophos.csproj"
COPY . .
WORKDIR "/src/ProyectoSophos"
RUN dotnet build "ProyectoSophos.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProyectoSophos.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProyectoSophos.dll"]
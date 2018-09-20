FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["netcoreapi-node/netcoreapi-node.csproj", "netcoreapi-node/"]
RUN dotnet restore "netcoreapi-node/netcoreapi-node.csproj"
COPY . .
WORKDIR "/src/netcoreapi-node"
RUN dotnet build "netcoreapi-node.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "netcoreapi-node.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "netcoreapi-node.dll"]
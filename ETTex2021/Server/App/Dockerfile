#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/runtime:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["App/Server.App.csproj", "App/"]
COPY ["Model/Server.Model.csproj", "Model/"]
COPY ["ThirdParty/MongoDBDriver/MongoDB.Driver/MongoDB.Driver.csproj", "ThirdParty/MongoDBDriver/MongoDB.Driver/"]
COPY ["ThirdParty/MongoDBDriver/MongoDB.Bson/MongoDB.Bson.csproj", "ThirdParty/MongoDBDriver/MongoDB.Bson/"]
COPY ["ThirdParty/MongoDBDriver/MongoDB.Driver.Core/MongoDB.Driver.Core.csproj", "ThirdParty/MongoDBDriver/MongoDB.Driver.Core/"]
COPY ["ThirdParty/MongoDBDriver/MongoDB.Driver.GridFS/MongoDB.Driver.GridFS.csproj", "ThirdParty/MongoDBDriver/MongoDB.Driver.GridFS/"]
COPY ["ThirdParty/KcpLib/KcpLib.csproj", "ThirdParty/KcpLib/"]
COPY ["ThirdParty/Google.Protobuf/Google.Protobuf.csproj", "ThirdParty/Google.Protobuf/"]
RUN dotnet restore "App/Server.App.csproj"
COPY . .
WORKDIR "/src/App"
RUN dotnet build "Server.App.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Server.App.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "App.dll"]
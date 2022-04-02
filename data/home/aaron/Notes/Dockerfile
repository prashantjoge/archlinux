FROM microsoft/dotnet:2.2-sdk as build

WORKDIR /app
Copy *.xml ./
COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Debug -o out

From microsoft/dotnet:2.2-aspnetcore-runtime as runtime

WORKDIR /app

COPY --from=build /app/out .

ENTRYPOINT ["dotnet", "OERService.dll"]

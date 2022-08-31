cd /d %~dp0
dotnet publish -c Release -r linux-x64 -o ../publish --self-contained true
pause
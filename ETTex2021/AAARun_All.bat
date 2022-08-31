redis-cli.exe -h localhost -p 6379 -a 654321 --no-auth-warning  flushall
dotnet App.dll --appId=1 --appType=AllServer --config=../Config/StartConfig/LocalAllServer.txt
pause.
@echo off                           
:loop 

echo Abriendo Server JS

start "openServer" "C:\Users\mathi\Desktop\bot burguerpants\openServer" 
                              
timeout /t 3600

echo Cerrando Server JS

taskkill /im node.exe /F

echo Reabriendo Server JS

timeout /t 2

goto loop 
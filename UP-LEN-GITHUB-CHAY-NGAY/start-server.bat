@echo off
chcp 65001 >nul
title Khởi Động Website Be Wellness Spa
echo ===================================================
echo     ĐANG KHỞI ĐỘNG WEBSITE BE WELLNESS SPA...
echo ===================================================
echo.
echo Website sẽ mở tại: http://localhost:5173/
echo (Để tắt server, hãy bấm tổ hợp phím Ctrl + C hoặc đóng cửa sổ này)
echo.

npm run dev
pause

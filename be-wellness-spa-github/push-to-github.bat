@echo off
chcp 65001 >nul
echo ========================================================
echo        HƯỚNG DẪN ĐẨY DỰ ÁN BE WELLNESS SPA LÊN GITHUB
echo ========================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [THÔNG BÁO] Máy tính của bạn chưa cài đặt Git.
    echo.
    echo Bạn có thể chọn 1 trong 2 cách sau để đưa lên GitHub:
    echo 1. Tải và cài Git tại: https://git-scm.com/downloads/win
    echo 2. Hoặc dùng GitHub Desktop (dễ nhất, kéo thả): https://desktop.github.com/
    echo.
    pause
    exit /b
)

echo [1/4] Khởi tạo Git repository...
git init

echo.
echo [2/4] Đang thêm tất cả các file...
git add .

echo.
echo [3/4] Tạo commit đầu tiên...
git commit -m "Initial commit: Be Wellness Spa comprehensive website"

echo.
set /p REPO_URL="Nhập URL repository GitHub của bạn (ví dụ: https://github.com/username/be-wellness-spa.git): "

if "%REPO_URL%"=="" (
    echo Bạn chưa nhập URL. Bạn có thể tự chạy lệnh:
    echo git remote add origin ^<URL_CUA_BAN^>
    echo git branch -M main
    echo git push -u origin main
    pause
    exit /b
)

echo.
echo [4/4] Đang đẩy mã nguồn lên GitHub...
git branch -M main
git remote remove origin >nul 2>nul
git remote add origin %REPO_URL%
git push -u origin main

echo.
echo ========================================================
echo ĐÃ HOÀN TẤT ĐẨY MÃ NGUỒN LÊN GITHUB THÀNH CÔNG!
echo ========================================================
pause

# Fix Deployment Issues Across All HTML Files
# This script fixes broken external URLs that cause blank pages on GitHub Pages/Vercel
# Author: Pry Uchiha

$rootPath = "c:\Users\priya\OneDrive\Desktop\Projects\I Want To Eat Your Pancreas"

Write-Host "🚀 Fixing Deployment Issues for GitHub Pages/Vercel..." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Yellow

# Get all HTML files
$htmlFiles = Get-ChildItem -Path $rootPath -Filter "*.html" -Recurse | Sort-Object FullName

$fixedFiles = 0
$issuesFound = 0

foreach ($file in $htmlFiles) {
    try {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        $originalContent = $content
        $fileFixed = $false
        
        # Fix 1: Broken jQuery CDN URL
        if ($content -match '\.\./code\.jquery\.com/') {
            $content = $content -replace '\.\./code\.jquery\.com/', 'https://code.jquery.com/'
            Write-Host "Fixed jQuery CDN in: $($file.Name)" -ForegroundColor Green
            $fileFixed = $true
            $issuesFound++
        }
        
        # Fix 2: Broken Google Analytics URL
        if ($content -match '\.\./www\.google-analytics\.com/') {
            $content = $content -replace '\.\./www\.google-analytics\.com/', 'https://www.google-analytics.com/'
            Write-Host "Fixed Google Analytics in: $($file.Name)" -ForegroundColor Green
            $fileFixed = $true
            $issuesFound++
        }
        
        # Fix 3: Broken Google Tag Manager URL
        if ($content -match '\.\./www\.googletagmanager\.com/gtm\d+\.html') {
            $content = $content -replace '\.\./www\.googletagmanager\.com/gtm\d+\.html', 'https://www.googletagmanager.com/gtm.js'
            Write-Host "Fixed Google Tag Manager in: $($file.Name)" -ForegroundColor Green
            $fileFixed = $true
            $issuesFound++
        }
        
        # Fix 4: HTTP references that should be HTTPS (for GitHub Pages)
        if ($content -match 'http://kimisui-anime\.com/') {
            $content = $content -replace 'http://kimisui-anime\.com/', 'https://kimisui-anime.com/'
            Write-Host "Fixed HTTP to HTTPS in: $($file.Name)" -ForegroundColor Green
            $fileFixed = $true
            $issuesFound++
        }
        
        # Fix 5: Missing favicon references that cause 404s
        if ($content -match 'href="([^"]*apple-touch-icon[^"]*)"' -and $content -notmatch 'href="\.\.*/.*apple-touch-icon') {
            # Only fix if it's a root-level file trying to access favicons
            if ($file.Directory.FullName -eq $rootPath) {
                # These are already correct for root files, skip
            } else {
                # For subdirectory files, ensure proper relative paths
                $relativePath = ""
                $pathParts = $file.Directory.FullName.Replace($rootPath, "").Split('\', [System.StringSplitOptions]::RemoveEmptyEntries)
                for ($i = 0; $i -lt $pathParts.Count; $i++) {
                    $relativePath += "../"
                }
                
                $content = $content -replace 'href="(apple-touch-icon[^"]*)"', "href=""$relativePath`$1"""
                $content = $content -replace 'href="favicon\.ico"', "href=""${relativePath}favicon.ico"""
                Write-Host "Fixed favicon paths in: $($file.Name)" -ForegroundColor Green
                $fileFixed = $true
                $issuesFound++
            }
        }
        
        # Only write if changes were made
        if ($fileFixed) {
            [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
            $fixedFiles++
        }
        
    } catch {
        Write-Host "Error processing $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n==========================================" -ForegroundColor Yellow
Write-Host "🎯 Deployment Fix Summary:" -ForegroundColor Cyan
Write-Host "Files processed: $($htmlFiles.Count)" -ForegroundColor White
Write-Host "Files fixed: $fixedFiles" -ForegroundColor Green
Write-Host "Issues resolved: $issuesFound" -ForegroundColor Yellow

Write-Host "`nKey Fixes Applied:" -ForegroundColor Magenta
Write-Host "- Fixed jQuery CDN URLs" -ForegroundColor Green
Write-Host "- Fixed Google Analytics URLs" -ForegroundColor Green  
Write-Host "- Fixed Google Tag Manager URLs" -ForegroundColor Green
Write-Host "- Fixed HTTP to HTTPS references for secure deployment" -ForegroundColor Green
Write-Host "- Fixed favicon path references" -ForegroundColor Green

Write-Host "`nNext Steps for Deployment:" -ForegroundColor Cyan
Write-Host "1. Commit all changes to your repository" -ForegroundColor White
Write-Host "2. Deploy test-deployment.html first to check basic functionality" -ForegroundColor White  
Write-Host "3. If test passes, deploy the full website" -ForegroundColor White
Write-Host "4. Check browser console for any remaining 404 errors" -ForegroundColor White

Write-Host "`nYour website should now work on:" -ForegroundColor Yellow
Write-Host "- GitHub Pages" -ForegroundColor Green
Write-Host "- Vercel" -ForegroundColor Green
Write-Host "- Any static hosting platform" -ForegroundColor Green
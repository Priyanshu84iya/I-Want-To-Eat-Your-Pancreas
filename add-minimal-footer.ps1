# Add Minimal Author Footer System to All HTML Files
# This script adds minimal disclaimer, watermark, and social links to all HTML files
# Author: Pry Uchiha

$rootPath = "c:\Users\priya\OneDrive\Desktop\Projects\I Want To Eat Your Pancreas"

# Get all HTML files
$htmlFiles = Get-ChildItem -Path $rootPath -Filter "*.html" -Recurse | Sort-Object FullName

Write-Host "Found $($htmlFiles.Count) HTML files to process" -ForegroundColor Green
Write-Host "Adding minimal author footer system..." -ForegroundColor Yellow

$processedCount = 0
$skippedCount = 0

foreach ($file in $htmlFiles) {
    try {
        # Read file content
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        
        # Check if author footer script is already included
        if ($content -match 'author-footer\.js') {
            Write-Host "Skipping $($file.Name) - Author footer already exists" -ForegroundColor Yellow
            $skippedCount++
            continue
        }
        
        # Determine correct relative path to assets folder
        $fileDir = $file.Directory.FullName
        $scriptPath = ""
        
        if ($fileDir -eq $rootPath) {
            # Root directory files
            $scriptPath = "assets/js/author-footer.js"
        } else {
            # Calculate relative path for subdirectories
            $relativePart = $fileDir.Replace($rootPath, "").TrimStart('\')
            $levels = ($relativePart -split '\\').Count
            
            # Generate correct relative path
            $scriptPath = ("../" * $levels) + "assets/js/author-footer.js"
        }
        
        # Create script tag for author footer system
        $authorFooterScript = @"
    <!-- Minimal Author Footer: Disclaimer, Watermark, Social Links -->
    <script src="$scriptPath"></script>
"@
        
        # Find the closing body tag and insert before it
        if ($content -match '</body>') {
            $updatedContent = $content -replace '</body>', "$authorFooterScript`r`n</body>"
            
            # Write updated content back to file
            [System.IO.File]::WriteAllText($file.FullName, $updatedContent, [System.Text.Encoding]::UTF8)
            
            $relativeFilePath = $file.FullName.Replace($rootPath + '\', '')
            Write-Host "Processed: $relativeFilePath" -ForegroundColor Green
            $processedCount++
        } else {
            Write-Host "Warning: No closing body tag found in $($file.Name)" -ForegroundColor Red
        }
        
    } catch {
        Write-Host "Error processing $($file.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n=== Minimal Author Footer Installation Complete ===" -ForegroundColor Cyan
Write-Host "Files processed: $processedCount" -ForegroundColor Green
Write-Host "Files skipped: $skippedCount" -ForegroundColor Yellow
Write-Host "`nFeatures added (very small and subtle):" -ForegroundColor White
Write-Host "- Clone disclaimer footer at bottom (9px font)" -ForegroundColor Magenta
Write-Host "- Author watermark: 'Author: Pry Uchiha' (8px, top-right)" -ForegroundColor Magenta
Write-Host "- 5 social media links (16x16px icons, bottom-left)" -ForegroundColor Magenta
Write-Host "- All elements are minimally intrusive and very small" -ForegroundColor Magenta
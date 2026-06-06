cd C:\Users\cheun\.openclaw\workspace\Business_Research\research
Write-Host "=== PAGERDUTY MORE ==="
node extract_pd3.js 2>&1
Write-Host "=== HUBSPOT ==="
node extract_hubspot.js 2>&1
Write-Host "=== LINEAR ==="
node extract_linear.js 2>&1
Write-Host "=== NOTION ==="
node extract_notion.js 2>&1
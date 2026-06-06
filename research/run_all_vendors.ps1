cd C:\Users\cheun\.openclaw\workspace\Business_Research\research
Write-Host "=== NEW RELIC ==="
node extract_nr2.js 2>&1
Write-Host "=== PAGERDUTY ==="
node extract_pd2.js 2>&1
Write-Host "=== FASTLY ==="
node extract_fastly2.js 2>&1
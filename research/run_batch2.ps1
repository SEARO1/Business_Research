cd C:\Users\cheun\.openclaw\workspace\Business_Research\research
Write-Host "=== PAGERDUTY DETAILED ==="
node extract_pd_detailed.js 2>&1
Write-Host "=== MULESOFT ==="
node extract_mulesoft.js 2>&1
Write-Host "=== TABLEAU ==="
node extract_tableau.js 2>&1
Write-Host "=== SERVICENOW ==="
node extract_servicenow.js 2>&1
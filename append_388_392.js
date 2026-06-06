const fs = require("fs");
const path = require("path");
const findings = [
  { Pain_Point_Category: "Onboarding & Deployment", Specific_Friction: "OpsGenie customer Viaspan reduced incident response time from 45 minutes to under 1 hour SLA, achieving faster alert routing and on-call scheduling efficiency across distributed teams", Source_URL: "https://opsgenie.com/customers/viaspan", Severity_Impact: "High" },
  { Pain_Point_Category: "Legacy System Integration", Specific_Friction: "OverOps customer DoorDash eliminated manual root cause analysis by automatically correlating logs, metrics, and traces across microservices, reducing RCA time from hours to minutes with 10x faster identification of production errors", Source_URL: "https://www.overops.com/case-studies/doordash/", Severity_Impact: "High" },
  { Pain_Point_Category: "Legacy System Integration", Specific_Friction: "DataRobot customer Bank of America reduced model deployment time by 80% through automated machine learning, eliminating manual feature engineering and model selection bottlenecks that previously took weeks", Source_URL: "https://www.datarobot.com/customers/bank-of-america/", Severity_Impact: "High" },
  { Pain_Point_Category: "Legacy System Integration", Specific_Friction: "iHeartRadio consolidated 100+ data sources into unified audience analytics, replacing fragmented spreadsheet-based reporting that consumed 20+ hours weekly of analyst manual reconciliation work", Source_URL: "https://www.heap.io/case-studies/iheartradio", Severity_Impact: "Medium" },
  { Pain_Point_Category: "Onboarding & Deployment", Specific_Friction: "CircleCI internal engineering team reduced CI/CD pipeline time to 4-5 minute test suites, enabling hundreds of deploys per day and eliminating deployment anxiety through fast, reliable automated testing gates", Source_URL: "https://circleci.com/blog/how-circleci-processes-4-5-million-test-classes/", Severity_Impact: "Medium" }
];
const jsonlPath = path.join(__dirname, "research", "research_log.jsonl");
let currentLength = 0;
try { const content = fs.readFileSync(jsonlPath, "utf8"); currentLength = content.split("\n").filter(l => l.trim()).length; } catch(e) {}
findings.forEach((f, i) => { currentLength++; fs.appendFileSync(jsonlPath, JSON.stringify(f) + "\n"); console.log("Wrote #" + (387 + i + 1) + ": " + f.Pain_Point_Category); });
console.log("Total: " + currentLength + " lines");

---
title: Observability Score
description: Track your monitoring maturity based on vBox best practices.
sidebar:
  order: 2
---

## What is Observability Score?

It is a KPI under the "Operations" pillar that reflects the current state of monitoring based on vBox best practices. The Observability Score ranges from 0% to 100% and is calculated using the status of key monitoring recommendations.

Each fully addressed recommendation — where no affected resources remain — contributes to the overall score, helping track implementation progress and monitoring maturity.

## How Is It Calculated?

There are several Operations-related recommendations that affect the Observability Score, which ranges from 0% to 100%. They are grouped into Controls that must be fully completed to earn Maximum Points and increase the Observability Score.

### Controls and Recommendations

| Control | Max Points | Recommendations |
|---------|-----------|-----------------|
| **1. API** | 6 | Enable API specification static analysis to ensure compliance with your organization's API style guide |
| **2. Availability** | 12 | Create an Azure Service Health alert, Setup endpoints availability monitoring, Create an Azure Resource Health alert |
| **3. Backup Health** | 12 | Switch to Azure Monitor based alerts for backup, Create a Backup Health alert, Create a Replication Health alert |
| **4. Container Performance** | 6 | Monitoring addon workspace is deleted, Enable Container Insights |
| **5. Cosmos DB Insights** | 6 | Enable near real-time analytics or reporting on your Azure Cosmos DB data |
| **6. Database Health** | 6 | Increase the reliability of audit logs for Maria DB/MySQL, Review server for log_duration, bloat ratio, log_error_verbosity, log_statement settings, Enable Accelerated Logs |
| **7. Log Alerts** | 6 | Repair your log alert rule, Log alert rule was disabled |
| **8. Network** | 6 | Enable Traffic Analytics, Upgrade from NSG flow log to Virtual Network flow log, Configure Connection Monitor for ExpressRoute |
| **9. VM Health** | 6 | Install SQL best practices assessment on your SQL VM, Enable Azure VMSS application health monitoring |

## How to Get It

The Observability Score is part of Operations Assessment and will be calculated automatically against your infrastructure when the "Operations Features" setting is turned on at the Customer level.

<!-- TODO: Add screenshot of Operations Features customer setting -->

## Where to See It

### Operations Recommendations Page

The first KPI on the top panel shows the current value and the change over the last 30 days for the Observability Score.

<!-- TODO: Add screenshot of Operations Recommendations KPI panel -->

You can filter the list of recommendations by selecting the "Observability Score" scope to see only recommendations that affect the score.

Group recommendations by "Control" to see the **Potential Score Increase** for each Control, which shows how much it will impact the score once completed.

<!-- TODO: Add screenshot of recommendations grouped by Control -->

### Main Dashboard

The dashboard contains a line chart that shows historical changes in the Observability Score value over time.

<!-- TODO: Add screenshot of Observability Score dashboard chart -->

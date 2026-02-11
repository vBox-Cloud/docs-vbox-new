---
title: Operations Overview
description: Improve reliability, performance, and governance across your Azure environment with vBox operations tools.
sidebar:
  order: 1
---

vBox Operations helps organizations improve reliability, performance, and governance across their Azure environment. It provides comprehensive KPIs, operational best-practice recommendations, and AzGovViz integration for policy and RBAC insights.

## Key Capabilities

- **Observability Score** — Track your monitoring maturity based on vBox best practices with 30-day trend analysis
- **Active Recommendations** — Count of actionable recommendations categorized by severity (High/Medium/Low)
- **Availability** — Average availability percentage across your Azure resources (configurable by MSP)
- **Backups** — Backup success rate with protected/total instances tracking and links to Azure Backup Center
- **Operations Recommendations** — Actionable recommendations for improving operational excellence
- **AzGovViz Integration** — Policy, RBAC, and management group insights via Azure Governance Visualizer
- **BI Dashboards** — Operational health reporting through embedded Metabase dashboards

## Operations Pages

| Page | Route | Description |
|------|-------|-------------|
| [Summary](/operations/summary/) | `/operations/summary` | Operations overview with embedded Metabase BI dashboards (requires BI_ANALYTICS feature) |
| [Recommendations](/operations/recommendations/) | `/operations/recommendations` | Operations recommendations with 4 KPIs, filters, grouping options, and actions |
| [Assessments](/operations/assessments/) | `/operations/assessments` | Operations assessment management with AzGovViz import capabilities (available for MSP users) |

:::note
The Operations Summary page requires the BI_ANALYTICS feature to be enabled. When disabled, users are redirected to the Recommendations page by default.
:::

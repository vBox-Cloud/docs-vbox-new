---
title: Cost Management Overview
description: Analyze and optimize Azure infrastructure costs with vBox's cost management tools.
sidebar:
  order: 1
---

vBox Cost Management helps organizations identify Azure waste, highlight savings recommendations, and bring clarity to cloud spend. It provides detailed cost analysis with historical data, advanced grouping, filtering, and baseline comparison.

## Key Capabilities

- **Cost Analysis** — Analyze Azure infrastructure costs with up to 12 months of historical data
- **Baseline Comparison** — Compare costs between two calendar months to track trends
- **Savings Recommendations** — Identify cost optimization opportunities with prioritized recommendations
- **BI Dashboards** — Executive-level cost reporting through embedded Metabase dashboards
- **Cost Assessments** — Structured cost evaluation and reporting for MSP customers

## Cost Management Routes

The Cost Management module provides access through the following routes:

- `/cost/summary` — Cost overview with BI dashboards
- `/cost/details` — Detailed cost breakdowns and analysis
- `/cost/optimization` — Cost optimization recommendations
- `/cost/assessment` — Cost assessment management (MSP only)

## Cost Management Pages

| Page | Route | Description |
|------|-------|-------------|
| [Summary](/cost-management/summary/) | `/cost/summary` | Cost overview with embedded BI dashboards showing projected annual cost, potential savings, and cost by service |
| [Details](/cost-management/details/) | `/cost/details` | Detailed cost breakdowns with grouping, filtering, baseline comparison, and resource-level drill-down |
| [Recommendations](/cost-management/recommendations/) | `/cost/optimization` | Cost optimization recommendations with details, resource insights, savings forecasts, and task management |
| [Assessments](/cost-management/assessments/) | `/cost/assessment` | Cost assessment management for MSP users, including creation, deployment, and reporting |

## Feature Flags

The following feature flags control Cost Management functionality:

- `COST_DETAILS` — Enables the Cost Details page and core cost analysis features
- `BI_ANALYTICS` — Required for the Cost Summary BI dashboards
- `FEATURE_AI` — Enables AI-powered features
- `FEATURE_AI_COST_SUMMARY` — Enables AI summary for cost recommendations
- `CAN_IMPORT_OPTIMIZATIONS` — Allows importing optimization results
- `TASKS` — Enables task creation and management for recommendations

:::note
Some features may require specific feature flags to be enabled. Check with your administrator if a feature is not available.
:::

---
title: Cost Summary
description: Cost overview with embedded BI dashboards showing projected annual cost, potential savings, and cost breakdown by service.
sidebar:
  order: 4
---

The **Cost Summary** page provides a high-level overview of your Azure spending through embedded BI dashboards powered by Metabase.

## BI Dashboard View

<!-- TODO: Add screenshot of Metabase BI dashboard -->

The Cost Summary page displays cost analytics through embedded Metabase dashboards, providing executive-level insights into Azure spending patterns and optimization opportunities.

:::note
The Cost Summary page requires the [BI Analytics](/analytics/bi-analytics/) feature flag to be enabled.
:::

### Dashboard Charts

The Cost Summary dashboard includes the following visualizations:

| Chart | Description |
|-------|-------------|
| **Projected Annual Cost $** | Forecasted annual Azure spend based on current spending patterns |
| **Annual Potential Saving %** | Percentage of potential savings identified through optimization recommendations |
| **Annual Potential Saving $** | Dollar amount of potential annual savings |
| **Cost Recommendations Strategies** | Breakdown of optimization strategies and their impact |
| **Cost By Service Name** | Cost distribution across Azure services, showing which services consume the most budget |
| **Overall Tag Coverage** | Resource tagging compliance metrics |
| **Budget by Subscription** | Budget tracking and variance analysis per subscription |

:::tip
Use the Cost By Service Name chart to quickly identify services with the highest spending, which may be good candidates for optimization.
:::

## Deprecated Widget View

:::caution[Deprecated]
The previous widget-based Cost Summary view has been deprecated in favor of the Metabase BI dashboard integration. The BI dashboard provides more comprehensive analytics, better performance, and enhanced interactivity.
:::

If you're using an older version of vBox, you may see a widget-based view. The current implementation uses Metabase BI dashboards exclusively, which offer:

- **Enhanced Interactivity** — Drill-down capabilities and dynamic filtering
- **Better Performance** — Optimized queries and caching
- **Richer Visualizations** — More chart types and customization options
- **Real-time Updates** — Automatic refresh of cost data
- **Export Capabilities** — Direct export of dashboard data and reports

## Accessing Cost Summary

The Cost Summary page is accessible via the `/cost/summary` route and provides a consolidated view of:

- Overall spending trends
- Potential savings opportunities
- Cost distribution across services and subscriptions
- Tagging compliance metrics
- Budget tracking and variance

:::note
For detailed cost analysis and resource-level breakdowns, use the [Cost Details](/cost-management/details/) page. For specific optimization recommendations, see the [Cost Recommendations](/cost-management/recommendations/) page.
:::

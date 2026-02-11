---
title: Operations Recommendations
description: Actionable recommendations for improving operational excellence in your Azure environment.
sidebar:
  order: 3
---

The Operations Recommendations page provides a comprehensive list of operational improvement actions for your Azure environment, featuring four key performance indicators (KPIs) and powerful filtering and grouping capabilities.

## Key Performance Indicators (KPIs)

The Operations Recommendations page displays four primary KPIs at the top:

| KPI | Description |
|-----|-------------|
| **Observability Score** | Monitoring maturity score percentage with 30-day difference indicator showing trend |
| **Active Recommendations** | Total count of active recommendations with severity breakdown bar (High/Medium/Low) |
| **Availability** | Average availability percentage across Azure resources (configurable by MSP) |
| **Backups** | Backup success percentage showing protected/total instances with links to Azure Backup Center |

:::tip
The Observability Score includes a 30-day difference indicator to help you track improvement trends over time.
:::

## Scope Filter

The **Scope** filter allows you to focus on specific recommendation types:

- **All** (default) — Shows all operational recommendations
- **Observability Score** — Filters recommendations that impact the Observability Score KPI

:::note
When Scope is set to "Observability Score", the Control grouping option becomes available to help you identify which control groups will provide the highest score increase.
:::

## Additional Filters

Refine your recommendations view using these filters:

| Filter | Options | Description |
|--------|---------|-------------|
| **Severity** | Low, Medium, High | Filter by recommendation severity level |
| **Effort** | Low, Medium, High | Filter by estimated implementation effort |
| **User Impact** | Various options | Filter by impact on end users |
| **Cost Impact** | Various options | Filter by financial impact |

## Grouping Options

Group recommendations to analyze patterns and prioritize work:

| Grouping Option | Availability | Description |
|----------------|--------------|-------------|
| **Control** | Only when Scope = Observability Score | Group by control category to see potential score increases |
| **Category** | Always | Group by recommendation category |
| **Severity** | Always | Group by severity level (High/Medium/Low) |
| **Effort** | Always | Group by implementation effort |
| **User Impact** | Always | Group by user impact level |
| **Cost Impact** | Always | Group by cost impact level |
| **Subscription** | Always | Group by Azure subscription |
| **Resource Group** | Always | Group by resource group |
| **Resource Type** | Always | Group by Azure resource type |
| **No Grouping** | Always | Default view without grouping |

:::tip
Group recommendations by "Control" when Scope is set to "Observability Score" to see which control groups will give you the highest Observability Score increase when fully completed.
:::

## Actions

Available actions for managing recommendations:

| Action | Description |
|--------|-------------|
| **Create Task** | Convert a recommendation into a tracked task for implementation |
| **Mute/Unmute** | Temporarily hide recommendations that don't apply to your environment |
| **Export Excel** | Export filtered recommendations to Excel for offline analysis |
| **Share Report** | Generate a shareable link to the current filtered view |
| **Download Report** | Download the current report view |
| **Show Muted** | Toggle visibility of muted recommendations |

## Recommendation Profile

Each recommendation includes a detailed profile with the same structure as Security recommendations:

- **Properties Tab** — Technical details, affected resources, and metadata
- **Description Tab** — Explanation of the recommendation and why it matters
- **Remediation Tab** — Step-by-step instructions for implementing the recommendation
- **Resource Tab** — List of affected Azure resources with links

:::caution
Muted recommendations are hidden by default. Use the "Show Muted" toggle to review previously muted items if needed.
:::

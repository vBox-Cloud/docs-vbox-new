---
title: Cost Details
description: Analyze Azure infrastructure costs with historical data, advanced grouping, filtering, and baseline comparison.
sidebar:
  order: 2
---

The **Cost Details** feature allows users to analyze Azure infrastructure costs with last-year data. It includes advanced grouping, filtering, and baseline comparison to optimize spending and track trends effectively.

This feature includes two pages:

- **Cost Details** — High-level cost analysis grouped by subscription, service, region, etc.
- **Resources Cost** — Resource-level cost breakdown within a selected group

## Cost Details Page

### Cost KPI Panel

<!-- TODO: Add screenshot of Cost KPI panel -->

The panel at the top of the page displays key numbers related to Azure spend for your infrastructure:

- **Baseline Period** — Total cost amount of the infrastructure for the customer within the selected baseline period.
- **Comparison Period** — Total cost amount of the infrastructure for the customer within the selected comparison period.
- **Change** — The amount showing how total cost changed from the baseline to comparison periods.
- **Average /day** — The average total infrastructure cost per day within the comparison period.

### Cost Data Grid

<!-- TODO: Add screenshot of Cost data grid -->

This page contains a table with Azure cost grouped by one of the following options:

- **Subscription**
- **Service Name**
- **Region**
- **Resource Type**
- **Resource Group**
- **Tags**

For each group, the following data is shown in the table:

- Baseline period cost
- Comparison period cost
- Diff amount
- Diff percentage
- Diff total percentage

Users can choose two calendar months to compare data and visualize differences: **Baseline Period** and **Comparison Period**.

A special mode, **"Baseline comparison"**, will show how the cost of resources that existed in the **Baseline Period** changed in the **Comparison Period**.

:::note
Once this feature is enabled, vBox ingests cost data for the last 12 months from Azure and continues incremental daily collection to provide historical data beyond the last year.
:::

Users can switch between **Amortized** and **Actual Cost**, where amortized cost includes reservation costs split proportionally across months. Data on the entire page updates accordingly.

---

## Resources Cost Page

Displays the cost at the resource level for the group chosen on the **Cost Details** page.

### Cost KPI Panel

<!-- TODO: Add screenshot of Resources Cost KPI panel -->

The panel at the top of the page shows key numbers related to the group selected on the **Cost Details** page:

- **Baseline Period** — Cost amount of the selected group within the selected baseline period.
- **Comparison Period** — Cost amount of the selected group within the selected comparison period.
- **Change** — The amount showing how the cost of the selected group changed from the baseline to comparison periods.
- **Average /day** — The average cost per day within the comparison period.

### Cost Data Grid

<!-- TODO: Add screenshot of Resources Cost data grid -->

This page contains a table with resources and their costs grouped by one of the following options:

- **Subscription**
- **Resource Group**
- **Resource Type**
- **Region**
- **Tags**
- **No Grouping**

For each group, the following data is shown in the table:

- Baseline period cost
- Comparison period cost
- Diff amount
- Diff percentage
- Diff total percentage

This page includes the same cost analysis functionality as the **Cost Details** page. Users can:

- Choose two calendar months to compare resource costs using **Baseline comparison**.
- Switch between **Amortized** and **Actual Cost**.

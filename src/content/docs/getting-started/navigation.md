---
title: Navigation Guide
description: Overview of the vBox user interface — sidebar, pages, and layout.
sidebar:
  order: 3
---

This page provides an overview of the vBox portal layout and navigation structure.

## Main Navigation

The vBox portal uses a sidebar navigation with the following main sections:

### Dashboard

The Dashboard provides two viewing options accessible via a tab switcher:

#### Dashboard (Metabase BI)
- **Primary Dashboard** — Embedded Metabase BI dashboard (requires `BI_ANALYTICS` feature enabled)
- **Dashboard Type** — `main` dashboard type
- Provides comprehensive analytics and visualizations across all modules

#### Dashboard (Deprecated)
- **Legacy Widget-Based Dashboard** — Grid-based layout with conditional widgets
- **Layout** — 6-column grid system
- **Widgets**:
  - **Cost Widgets**:
    - Cost Details Widget (4 columns)
    - Savings Potential Trends Widget with tabs (4 columns)
    - Cost and Savings Widget (4 columns)
    - Links Widget - Cost (2 columns)
  - **Security Widgets**:
    - Security Score Trends Widget showing 30-day trends (4 columns)
    - Links Widget - Security (2 columns)
  - **Operations Widgets**:
    - Observability Score Widget (4 columns)
    - Links Widget - Operations (2 columns)

:::note
The Metabase BI dashboard is the primary dashboard when `BI_ANALYTICS` is enabled. The legacy widget-based dashboard is available via the "Dashboard (deprecated)" tab.
:::

### Cost
- **Summary** — Cost overview with embedded Metabase BI dashboards
- **Recommendations** — Cost optimization recommendations with savings forecasts
- **Details** — Detailed cost breakdowns and analytics
- **Assessments** — Cost assessment management (MSP users only)

### Security
- **Summary** — Security overview with embedded Metabase BI dashboards
- **Recommendations** — Security recommendations with profiles and compliance controls
- **Assessments** — Security assessment management (MSP users only)

### Operations
- **Summary** — Operations overview with embedded Metabase BI dashboards (requires `BI_ANALYTICS` feature, route: `/operations/summary`)
- **Recommendations** — Operations recommendations with 4 KPIs, filters, grouping, and actions (default route: `/operations/recommendations`)
- **Assessments** — Operations assessment management with AzGovViz import capabilities (MSP users only, route: `/operations/assessments`)

:::tip
The Operations Summary page redirects to Recommendations when `BI_ANALYTICS` is not enabled.
:::

### Tasks
Task management and tracking for cloud improvement work items.

## User Roles

vBox supports different user roles with varying access levels:

- **Regular Users** — Standard access to dashboards and recommendations
- **MSP (Managed Service Provider)** — Full access including assessments and workspace management
- **Account Manager** — Customer management capabilities
- **System Administrator** — Administrative functions

:::note
Some menu items may not be visible depending on your user role and the features enabled for your organization.
:::

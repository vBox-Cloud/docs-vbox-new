---
title: BI Analytics
description: Business intelligence dashboards powered by Metabase for data visualization and reporting.
sidebar:
  order: 1
---

## What is BI Reporting?

Business intelligence (BI) reporting is the process of collecting, analyzing, and presenting business data to provide insights that support decision-making. It involves transforming raw data into meaningful visualizations like charts, dashboards, and reports, making it easier for users to understand trends, patterns, and key performance indicators.

## BI Analytics in vBox

vBox BI Analytics is based on [Metabase](https://www.metabase.com/), an open-source business intelligence tool that allows users to explore, visualize, and share data without needing extensive technical expertise.

Metabase connects to various data sources, allowing users to create dashboards, build visualizations, and embed these into other applications. See the [Metabase documentation](https://www.metabase.com/docs/latest/) for more details.

## Embedded BI Reports

Currently, vBox supports the following [static embedded](https://www.metabase.com/docs/latest/embedding/static-embedding) dashboards:

### Main Dashboard

<!-- TODO: Add screenshot of Main Dashboard BI view -->

**Charts:**
- Cost Details
- Savings Potential %
- Secure Score: Infrastructure
- Resource Health: Infrastructure
- Backup Jobs %
- Monitoring Coverage %
- Active Recommendations

### Cost Summary

<!-- TODO: Add screenshot of Cost Summary BI view -->

**Charts:**
- Projected Annual Cost $
- Annual Potential Saving %
- Annual Potential Saving $
- Cost Recommendations Strategies
- Cost By Service Name
- Overall Tag Coverage
- Budget by Subscription

### Security Summary

<!-- TODO: Add screenshot of Security Summary BI view -->

**Charts:**
- Secure Score
- Secure Score: Infrastructure
- Security Benchmark
- Secure Score: Infrastructure Controls
- Resource Health: Infrastructure

### Operations Summary

**Planned charts:**
- Observability Score KPI with diff
- Observability Score trend chart
- Potential Observability Score Increase
- Backup jobs completion %
- Active recommendations

## How to Enable BI Analytics

To enable the BI Analytics feature, turn on the corresponding setting for a Customer in the administration panel.

<!-- TODO: Add screenshot of BI Analytics customer setting -->

---
title: Operations Assessments
description: Operations assessment management for MSP users.
sidebar:
  order: 5
---

:::note[MSP Feature]
Operations Assessments are available only for Organization Contributors (MSP) and System Administrators.
:::

The Operations Assessments page allows Organization Contributors to create and manage operations assessments for their customers, providing structured evaluation and reporting of operational excellence improvements.

## Assessment Types

Operations assessments support two types of assessment results:

| Assessment Type | Description |
|----------------|-------------|
| **AssessmentResult** | Standard operations assessment results created within vBox |
| **AzGovVizResult** | Imported assessment results from Azure Governance Visualizer (AzGovViz) |

## AzGovViz Integration

vBox integrates with Azure Governance Visualizer (AzGovViz) to import policy, RBAC, and management group insights into your operations assessments.

### Consent Banner

When AzGovViz is enabled for your organization, a consent banner appears on the Operations page with two important warnings:

1. **Graph API Consent** — You must accept Graph API consent permissions for AzGovViz to access Azure AD data
2. **Reader Role** — You must add the Reader role to the Root Management Group for AzGovViz to read governance data

:::caution
Both consent steps are required for AzGovViz integration to function properly. The consent banner will remain visible until both conditions are met.
:::

### Importing AzGovViz Reports

For pending assessments, an **Import AzGovViz Report** button is available to import assessment results:

1. Navigate to the Operations Assessments page
2. Select a pending assessment
3. Click **Import AzGovViz Report**
4. Select the AzGovViz report file to import
5. The assessment will be populated with AzGovViz results

:::tip
AzGovViz reports provide comprehensive insights into Azure governance structure, including management group hierarchy, policy assignments, and RBAC configurations.
:::

## Assessment Management

MSP users can:

- Create new operations assessments for customers
- Import AzGovViz reports into existing assessments
- View assessment results and track progress
- Generate assessment reports for customers
- Compare assessment results over time

:::note
Assessment results are stored separately by type (AssessmentResult vs AzGovVizResult) to maintain data integrity and enable proper filtering and analysis.
:::

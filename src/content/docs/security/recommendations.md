---
title: Security Recommendations
description: Actionable security recommendations with compliance controls and potential score impact.
sidebar:
  order: 4
---

The Security Recommendations page provides a comprehensive list of security improvement actions for your Azure environment, sourced from Microsoft Defender for Cloud and Microsoft Defender XDR.

## Security Indicators Panel

At the top of the page, a Security Indicators Panel displays key security metrics:

| Metric | Description |
|--------|-------------|
| **Secure Score** | Current security score percentage with 30-day difference indicator |
| **Unhealthy Resources** | Count of unhealthy resources out of total resources monitored |
| **Passed Controls** | Number of controls passed from the Cloud Security Benchmark |
| **Active Recommendations** | Count of active recommendations affecting your Secure Score |

## Secure Score Breakdown

The page provides a detailed breakdown view of your Secure Score across five categories:

| Category | Description |
|----------|-------------|
| **Infrastructure** | Infrastructure-related security posture score |
| **Apps** | Application security score |
| **Identity** | Identity and access management score |
| **Data** | Data protection and encryption score |
| **Devices** | Device security score |

Each category displays:
- Current score percentage
- 30-day difference (improvement or decline)
- Count of active recommendations

:::tip
The default scope filter is set to "Secure Score: Infrastructure" to help you focus on the highest-impact security improvements.
:::

## Microsoft 365 Consent Banner

When the `customerIncludeM365SecurityFeature` feature flag is enabled, a Microsoft 365 consent banner appears at the top of the page, allowing you to grant permissions for M365 security features.

## Recommendations Grid

The main recommendations grid displays comprehensive information for each security recommendation:

| Column | Description |
|--------|-------------|
| **Status** | Current status: Completed, Failed, or Not Applicable |
| **Recommendation Name** | Clickable link to open the recommendation profile page |
| **Severity** | Risk level: High, Medium, or Low |
| **Unhealthy Resources** | Count of affected resources and resource types |
| **Effort** | Estimated remediation effort: High, Medium, or Low |
| **User Impact** | Whether remediation will impact users: Yes or No |
| **Cost Impact** | Whether remediation will impact costs: Yes or No |
| **Compliance Control IDs** | Associated compliance control identifiers (e.g., CIS Controls) |
| **Potential Score Increase** | Estimated Secure Score points gained upon remediation |
| **Tasks** | Number of associated tasks |

## Scope Filters

Scope filters are **required** and determine which recommendations are displayed:

| Scope | Description |
|-------|-------------|
| **Secure Score: Infrastructure** | Infrastructure-related recommendations (default) |
| **Secure Score: Apps** | Application security recommendations |
| **Secure Score: Identity** | Identity and access management recommendations |
| **Secure Score: Data** | Data protection recommendations |
| **Secure Score: Devices** | Device security recommendations |
| **Cloud Security Benchmark** | Recommendations aligned with Cloud Security Benchmark |
| **CIS M365 Foundations Benchmark** | CIS M365 Foundations Benchmark recommendations |

:::note
You must select a scope filter to view recommendations. The default scope is "Secure Score: Infrastructure".
:::

## Additional Filters

Refine your view using these optional filters:

| Filter | Options |
|--------|---------|
| **Status** | Completed, Failed, Not Applicable |
| **Severity** | Low, Medium, High |
| **Effort** | Low, Medium, High |
| **User Impact** | Yes, No |
| **Cost Impact** | Yes, No |

## Grouping Options

Organize recommendations by different dimensions:

| Grouping Option | Description |
|-----------------|-------------|
| **Control** | Group by compliance control (default when scope is set) |
| **Category** | Group by recommendation category |
| **Severity** | Group by risk severity level |
| **Effort** | Group by remediation effort level |
| **Subscription** | Group by Azure subscription (not available for M365) |
| **Resource Group** | Group by Azure resource group (not available for M365) |
| **Resource Type** | Group by resource type |
| **Product** | Group by product (not available for M365) |
| **No Grouping** | Display as flat list |

## Actions

Available actions for managing recommendations:

| Action | Description |
|--------|-------------|
| **Create Task** | Create tasks for selected recommendations (bulk action supported) |
| **Mute/Unmute** | Temporarily hide recommendations or restore muted items |
| **Export** | Export recommendations in various formats: |
| | • Datagrid Excel export |
| | • Inventory export |
| | • Download Questionnaire (MSP-only) |
| **Import Recommendations** | Import recommendations from external sources (MSP-only) |
| **Share Report** | Email security report to stakeholders |
| **Download Report** | Download security report in PDF or other formats |
| **Show Muted** | Toggle visibility of muted recommendations |

:::caution[MSP-Only Features]
Import Recommendations and Download Questionnaire features are available only for MSP (Managed Service Provider) users.
:::

## Recommendation Profile

Clicking on a recommendation name opens a detailed profile page with the following sections:

### Header
- Recommendation name
- Status badge (Completed/Failed/Not Applicable)
- Back button to return to recommendations list

### Properties Card
- Editable properties (MSP only)
- Key recommendation metadata

### Description
- Detailed description of the security issue
- Associated compliance controls and CIS Controls

### Remediation Steps
- Step-by-step instructions for addressing the recommendation
- Best practices and guidance

### Resource Tabs
Navigate between different resource states:

| Tab | Description |
|-----|-------------|
| **Unhealthy** | Resources that need remediation |
| **Healthy** | Resources that already meet the recommendation |
| **Not Applicable** | Resources where the recommendation doesn't apply |
| **Muted** | Resources where the recommendation has been muted |
| **Tasks** | Associated remediation tasks |

### Resource Grid
For each resource, the grid displays:

| Column | Description |
|--------|-------------|
| **Resource Name** | Resource icon and clickable link |
| **Resource Type** | Type of Azure resource |
| **Subscription** | Azure subscription name |
| **Data** | Additional resource metadata |
| **State** | Current resource state |
| **Mute Until** | Mute expiration date (if muted) |
| **Tasks** | Associated tasks |

### Profile Actions
Available actions from the recommendation profile:

- **Edit Properties** - Modify recommendation properties (MSP only)
- **Create Task** - Create a new remediation task
- **Mute/Unmute Resources** - Mute or restore specific resources
- **Share** - Share the recommendation profile
- **Export** - Export resource details

## Routes

The Security Recommendations feature uses the following routes:

- `/security/recommendations` - Main recommendations list page
- `/security/recommendations/:code` - Recommendation profile page
- `/security/recommendations/:code/resource` - Resource-specific view

## Feature Flags

The following feature flags control Security Recommendations functionality:

- `BI_ANALYTICS` - Enables BI analytics integration
- `CAN_VIEW_SECURITY_INVENTORY` - Controls access to security inventory views
- `SECURITY` - Main security feature flag
- `TASKS` - Enables task management features

![Security Recommendations Dashboard](/images/security-recommendations-dashboard.png)

---
title: Customer Management
description: Managing customer organizations, settings, and feature configuration.
sidebar:
  order: 2
---

The Customer Management section allows administrators to configure and manage customer organizations within vBox. This comprehensive interface provides tools for viewing, editing, and configuring all aspects of customer organizations.

## Routes and Navigation

Customer management is accessed through the `/organization/:customerId` route with the following sub-routes:

| Route | Description |
|-------|-------------|
| `/organization/:customerId` | View customer information and overview |
| `/organization/:customerId/edit` | Access the customer configuration wizard |
| `/organization/:customerId/dashboard` | View customer dashboard |
| `/organization/:customerId/cost` | Access cost management features |
| `/organization/:customerId/security` | Access security features |
| `/organization/:customerId/operations` | Access operations features |
| `/organization/:customerId/tasks` | View and manage tasks |

## Organizations List Grid

The organizations list provides a comprehensive view of all customer organizations with detailed information and management capabilities.

### Grid Columns

The organizations grid displays the following columns:

| Column | Description |
|--------|-------------|
| **Name** | Customer organization name |
| **Plan** | Subscription plan type (Assessment, Implementation, Management Service CSP, Management Service) |
| **Status** | Organization status: Active, Inactive, or Archived |
| **Projected Annual Cost** | Estimated annual cost based on current usage patterns |
| **Savings%** | Percentage of potential cost savings identified |
| **Secure Score: Infra** | Infrastructure security score |
| **Created On** | Date when the organization was created |
| **Last Data Collection** | Most recent data collection timestamp (hover tooltip shows separate dates for Cost, Security, and Operations) |
| **Organization Readers** | Count of users with reader access (hover tooltip shows list of users) |
| **Active Tasks** | Count of active tasks (hover tooltip shows task details) |
| **Actions** | Action buttons: Get Summary, View Profile, Edit, Delete |
| **Tenants** | Azure tenant information (hidden by default, searchable) |

:::note[Tooltips]
Hover over the Last Data Collection, Organization Readers, and Active Tasks columns to see detailed information in tooltips.
:::

### Grid Features

The organizations grid includes several powerful features:

- **Sticky Header** — Column headers remain visible when scrolling through long lists
- **Search** — Full-text search across all visible columns
- **Sorting** — Click column headers to sort ascending/descending
- **Excel Export** — Export filtered and sorted data to Excel format
- **Currency Toggle** — Switch between Original currency and USD display
- **Column Visibility** — Show/hide columns based on your needs

![Organizations grid view](/images/customers-grid.png)

## Filters

Use filters to narrow down the organizations list:

### Plan Filter

Multi-select filter for subscription plan types:

- Assessment
- Implementation
- Management Service CSP
- Management Service

### Organization Owner Filter

User autocomplete filter to find organizations managed by specific users. Type to search and select from the dropdown.

### Status Filter

Checkbox filter for organization status:

- Active — Organization is active and receiving data collection
- Inactive — Organization is temporarily disabled
- Archived — Organization is archived and no longer active

:::tip[Filter Combinations]
Combine multiple filters to create precise views. For example, filter by "Management Service" plan and "Active" status to see all active managed service customers.
:::

## Customer Configuration Wizard

The customer configuration wizard (`/organization/:customerId/edit`) guides you through a comprehensive 5-step process to configure all aspects of a customer organization.

### Step 1: Organization Info

Configure basic organization information:

| Field | Type | Description |
|-------|------|-------------|
| **Name** | Required | Organization name |
| **Description** | Optional | Detailed description of the organization |
| **Status** | Required | Active, Inactive, or Archived |
| **Custom Links** | Optional | Add custom links with title and URL pairs for quick access to customer-specific resources |

:::note[Custom Links]
Custom links appear in the customer profile and provide quick access to customer portals, documentation, or other resources.
:::

### Step 2: Subscriptions

Configure Azure tenant and subscription associations:

| Field | Description |
|-------|-------------|
| **Azure Tenants** | Select one or more Azure tenants associated with this organization |
| **Subscriptions per Tenant** | Configure which subscriptions within each tenant should be monitored |

![Subscriptions configuration](/images/customers-subscriptions.png)

### Step 3: User Management

Assign users and roles for the organization:

| Field | Type | Description |
|-------|------|-------------|
| **Organization Readers** | Autocomplete | Users with read-only access to organization data |
| **MSP Engineers** | Autocomplete | MSP users assigned to manage this organization |
| **Account Manager** | Autocomplete | Primary account manager for the customer |
| **Run-As Account** | Required | Service account used for data collection and API access |

:::caution[Run-As Account]
The Run-As Account is required and must have appropriate permissions in Azure to collect data. Ensure this account has the necessary roles assigned in Azure AD.
:::

### Step 4: Subscription Plan

Configure the subscription plan and feature toggles:

#### Plan Type

Select from available plan types:

- **Assessment** — One-time assessment with limited features
- **Implementation** — Implementation-focused plan with enhanced features
- **Management Service CSP** — Full management service via CSP partnership
- **Management Service** — Full management service with all features

#### Feature Toggles

Enable or disable specific features:

| Feature | Description |
|---------|-------------|
| **Security** | Enables Secure Score tracking, security recommendations, and Defender for Cloud integration |
| **Operations** | Enables Observability Score, operations recommendations, and AzGovViz integration |
| **Cost Details** | Enables detailed cost analysis, cost recommendations, and historical cost data |
| **BI Analytics** | Enables embedded Metabase dashboards on Summary pages |
| **Tasks** | Enables task management for tracking recommendation follow-up |

#### Scheduling Configuration

Configure data collection schedules using cron masks:

- **Cost Collection Schedule** — When to collect cost data
- **Security Collection Schedule** — When to collect security data
- **Operations Collection Schedule** — When to collect operations data

#### Additional Options

- **M365 Security Inclusion** — Include Microsoft 365 security data in assessments
- **AzGovViz Integration** — Enable Azure Governance Visualizer integration for operations insights

:::tip[Feature Rollout]
Enable features incrementally — start with Cost Management for quick wins, then add Security and Operations as your team ramps up. This approach helps customers see value quickly while allowing time for proper configuration.
:::

### Step 5: Notifications (ITSM)

Configure email integration and notification settings:

#### Email Integration

Set up email notifications for various events:

| Field | Description |
|-------|-------------|
| **Email Addresses** | Multiple email addresses can be configured |
| **Email Prefixes** | Add prefixes to email subjects for categorization |
| **Detection Tickets** | Enable automatic ticket creation for security/operations detections |
| **Report Tickets** | Enable ticket creation for scheduled reports |
| **Weekly Digest** | Configure weekly summary email delivery |

![Notifications configuration](/images/customers-notifications.png)

:::note[ITSM Integration]
Email notifications can be integrated with ITSM systems by configuring appropriate email addresses and prefixes that route to your ticketing system.
:::

## Feature Settings Reference

Each customer can have the following features enabled independently:

| Feature | Description | Dependencies |
|---------|-------------|--------------|
| **Security** | Enables Secure Score tracking, security recommendations, and Defender for Cloud integration | Requires Azure Defender for Cloud |
| **Operations** | Enables Observability Score, operations recommendations, and AzGovViz integration | Requires appropriate Azure monitoring |
| **Cost Details** | Enables cost analysis, cost recommendations, and cost details with historical data | Requires Cost Management API access |
| **BI Analytics** | Enables embedded Metabase dashboards on Summary pages | Requires Metabase configuration |
| **Tasks** | Enables task management for tracking recommendation follow-up | No dependencies |

## Best Practices

1. **Complete Wizard Setup** — Ensure all wizard steps are completed for proper organization configuration
2. **Verify Run-As Account** — Test Run-As Account permissions before enabling data collection
3. **Configure Schedules** — Set appropriate collection schedules to balance data freshness with API rate limits
4. **Enable Features Gradually** — Start with core features and add advanced features as needed
5. **Document Custom Links** — Use custom links to provide quick access to customer-specific resources
6. **Monitor Active Tasks** — Regularly review active tasks to ensure recommendations are being addressed

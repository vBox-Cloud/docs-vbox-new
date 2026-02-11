---
title: Workspaces
description: Workspace management for MSP and system administrator users.
sidebar:
  order: 1
---

:::note[MSP / SA Feature]
Workspace management is available only for MSP (Managed Service Provider) and System Administrator users.
:::

Workspaces in vBox allow MSP users to organize and manage multiple customer environments from a single pane of glass. Workspaces provide logical grouping of customer organizations and help streamline administration across different business units or service tiers.

## Access Control

Workspace management routes are protected by role-based access control:

| Route | Access Level | Description |
|-------|-------------|-------------|
| `/workspaces` | MSP, System Administrator | View all workspaces |
| `/workspaces/add` | System Administrator only | Create new workspace |
| `/workspaces/:id` | MSP, System Administrator | View workspace details |
| `/workspaces/:id/edit` | System Administrator only | Edit workspace settings |
| `/workspaces/:id/organizations` | MSP, System Administrator | Manage organizations within workspace |

:::caution[Permission Required]
Only System Administrators can create and edit workspaces. MSP users can view workspaces and manage organizations within them, but cannot modify workspace settings.
:::

## Workspace Navigation

Workspaces are displayed in the sidebar menu, allowing quick navigation between different workspace contexts. The active workspace is highlighted, and you can switch workspaces directly from the navigation panel.

![Workspace sidebar navigation](/images/workspaces-sidebar.png)

## Creating a Workspace

System Administrators can create new workspaces through the `/workspaces/add` route. The workspace creation form includes:

### Required Fields

| Field | Requirements | Description |
|-------|-------------|-------------|
| **Name** | Required, 5-255 characters | Unique workspace identifier displayed in the sidebar and throughout the application |

### Optional Fields

| Field | Description |
|-------|-------------|
| **Description** | Additional context about the workspace purpose, customer grouping, or organizational structure |

:::tip[Workspace Naming]
Use descriptive names that clearly indicate the workspace purpose, such as "Enterprise Customers" or "SMB Tier 1". This helps MSP users quickly identify the correct workspace context.
:::

## Editing Workspaces

System Administrators can modify workspace settings through the `/workspaces/:id/edit` route. The edit form uses the same fields as the creation form, allowing you to update the workspace name and description.

:::note
Workspace edits affect all users with access to that workspace. Changes are reflected immediately in the sidebar navigation.
:::

## Managing Organizations

Each workspace can contain multiple customer organizations. Navigate to `/workspaces/:id/organizations` to view and manage all organizations within a specific workspace.

![Workspace organizations view](/images/workspaces-organizations.png)

## Global Settings

MSP users can configure workspace and organization visibility through the Global Settings dialog accessible from the application header. This tree-based selection interface allows you to:

- Control which workspaces are visible in your navigation
- Filter organizations within workspaces
- Customize your administrative view based on your responsibilities

:::tip[Customized Views]
Use Global Settings to create a personalized administrative view that focuses on the workspaces and organizations you manage most frequently.
:::

## Workspace Best Practices

1. **Logical Grouping** — Organize workspaces by customer tier, geographic region, or service level
2. **Clear Naming** — Use descriptive names that indicate workspace purpose
3. **Documentation** — Use the description field to document workspace purpose and any special considerations
4. **Access Management** — Ensure only authorized MSP users and System Administrators have access to sensitive workspaces

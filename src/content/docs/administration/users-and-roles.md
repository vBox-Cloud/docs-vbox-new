---
title: Users and Roles
description: Understanding user roles and permissions in vBox.
sidebar:
  order: 3
---

vBox supports different user roles with varying access levels to features and data. The role-based access control (RBAC) system ensures that users only have access to the features and data appropriate for their responsibilities.

## User Roles

vBox defines four primary user roles, each with specific permissions and access levels:

| Role | Description | Key Permissions |
|------|-------------|-----------------|
| **Regular User** | Standard access to dashboards and recommendations | View dashboards, recommendations, cost details; create tasks; view assigned organizations |
| **MSP** | Managed Service Provider with full access | All regular user permissions plus assessments, workspace management, customer management, organization configuration |
| **Account Manager** | Customer relationship management | Customer management, user management, view customer dashboards and reports |
| **System Administrator** | Full administrative access | All MSP permissions plus system-level configuration, workspace creation/editing, global settings |

### Regular User

Regular users have the most restricted access level, designed for end customers who need to view their organization's data and recommendations.

**Capabilities:**
- View dashboards for assigned organizations
- Access recommendations (Security, Operations, Cost)
- View cost details and historical data
- Create and manage tasks
- View reports and summaries

**Restrictions:**
- Cannot access workspace management
- Cannot modify organization settings
- Cannot manage users
- Cannot access system administration features

### MSP (Managed Service Provider)

MSP users have comprehensive access to manage multiple customer organizations and workspaces.

**Capabilities:**
- All Regular User capabilities
- Create and manage assessments
- View and manage workspaces (read-only for workspace settings)
- Create and manage customer organizations
- Configure organization settings through the customer wizard
- Access all customer dashboards and reports
- Manage organization users (Organization Readers, MSP Engineers, Account Managers)
- Configure feature toggles and subscription plans
- Set up notifications and ITSM integration

**Restrictions:**
- Cannot create or edit workspaces (System Administrator only)
- Cannot access system-level global settings (except workspace/organization visibility)

:::tip[MSP Best Practices]
MSP users should regularly review organization configurations, monitor active tasks, and ensure data collection schedules are appropriate for each customer's needs.
:::

### Account Manager

Account Managers focus on customer relationship management and have access to customer-facing features.

**Capabilities:**
- View customer organizations and profiles
- Manage customer information
- View customer dashboards and reports
- Manage users within customer organizations
- Access customer summaries and recommendations

**Restrictions:**
- Cannot access workspace management
- Cannot modify technical settings (subscriptions, Run-As accounts, scheduling)
- Cannot access system administration features

### System Administrator

System Administrators have full access to all features and system configuration.

**Capabilities:**
- All MSP capabilities
- Create and edit workspaces
- Modify workspace settings
- Access global settings dialog
- Configure system-wide settings
- Manage all users and roles
- Full access to all organizations and workspaces

:::caution[System Administrator Access]
System Administrator role provides unrestricted access to all features and data. Assign this role only to trusted administrators who require full system access.
:::

## Route Guards and Access Control

vBox implements route guards to enforce role-based access control throughout the application:

| Route Guard | Protected Routes | Required Role |
|-------------|------------------|---------------|
| `canActivateMsp` | MSP-specific features | MSP or System Administrator |
| `canActivateSa` | System administration features | System Administrator only |
| `canActivateCustomerRoute` | Customer organization routes | MSP, Account Manager, or System Administrator |
| `canActivateWorkspaceRoute` | Workspace management routes | MSP or System Administrator |
| `canActivateChildFeatureFlag` | Feature-specific routes (Cost, Security, Operations) | User with access + feature enabled |

### Route Guard Details

**canActivateMsp**
- Protects routes requiring MSP-level access
- Allows: MSP users, System Administrators
- Blocks: Regular Users, Account Managers (unless route also allows Account Manager)

**canActivateSa**
- Protects system administration routes
- Allows: System Administrators only
- Blocks: All other roles

**canActivateCustomerRoute**
- Protects customer organization routes (`/organization/:customerId/*`)
- Allows: MSP users, Account Managers, System Administrators
- Also checks user assignment to the specific organization
- Blocks: Regular Users (unless assigned to the organization)

**canActivateWorkspaceRoute**
- Protects workspace management routes (`/workspaces/*`)
- Allows: MSP users, System Administrators
- Blocks: Regular Users, Account Managers

**canActivateChildFeatureFlag**
- Protects feature-specific routes (e.g., `/organization/:customerId/cost`)
- Requires: User access to the organization AND feature enabled for that organization
- Checks feature flags: Security, Operations, Cost Details, BI Analytics, Tasks

:::note[Access Denied]
If you receive an "Access Denied" message, verify that:
1. Your role has the required permissions
2. You are assigned to the organization (for customer routes)
3. The feature is enabled for the organization (for feature-specific routes)
:::

## User Management

### Organization-Level User Assignment

Within each customer organization, you can assign users to specific roles:

| Role | Assignment Location | Description |
|------|---------------------|-------------|
| **Organization Readers** | Customer Wizard Step 3 | Users with read-only access to organization data |
| **MSP Engineers** | Customer Wizard Step 3 | MSP users assigned to manage this organization |
| **Account Manager** | Customer Wizard Step 3 | Primary account manager for the customer |

### User Assignment Best Practices

1. **Principle of Least Privilege** — Assign users only the minimum access level required
2. **Regular Audits** — Periodically review user assignments to ensure they're still appropriate
3. **Clear Responsibilities** — Document which MSP Engineers are responsible for which organizations
4. **Account Manager Assignment** — Ensure each customer has a designated Account Manager

## Role-Based Feature Access

Not all features and pages are visible to all users. The visibility depends on three factors:

### 1. User Role

The user's role determines which menu items and pages are accessible:

| Feature | Regular User | Account Manager | MSP | System Administrator |
|---------|--------------|-----------------|-----|---------------------|
| Dashboards | ✓ (assigned orgs) | ✓ (assigned orgs) | ✓ (all) | ✓ (all) |
| Recommendations | ✓ (assigned orgs) | ✓ (assigned orgs) | ✓ (all) | ✓ (all) |
| Tasks | ✓ (assigned orgs) | ✓ (assigned orgs) | ✓ (all) | ✓ (all) |
| Customer Management | ✗ | ✓ | ✓ | ✓ |
| Workspace Management | ✗ | ✗ | ✓ (view) | ✓ (full) |
| System Administration | ✗ | ✗ | ✗ | ✓ |

### 2. Feature Flags

Features enabled for the customer organization control access to specific feature areas:

| Feature Flag | Routes Affected | Description |
|--------------|-----------------|-------------|
| **Security** | `/organization/:customerId/security` | Security features and Secure Score |
| **Operations** | `/organization/:customerId/operations` | Operations features and Observability Score |
| **Cost Details** | `/organization/:customerId/cost` | Detailed cost analysis |
| **BI Analytics** | Summary pages | Embedded Metabase dashboards |
| **Tasks** | `/organization/:customerId/tasks` | Task management features |

:::tip[Feature Flag Configuration]
Feature flags are configured in Step 4 of the Customer Configuration Wizard. Enable only the features that are included in the customer's subscription plan.
:::

### 3. Organization Assignment

Regular Users can only access organizations to which they are assigned. MSP users and System Administrators have access to all organizations.

## Global Settings

MSP users can configure workspace and organization visibility through the Global Settings dialog accessible from the application header. This feature allows you to:

- Control which workspaces appear in your navigation
- Filter organizations within workspaces
- Create a customized administrative view

:::note[Global Settings Access]
Global Settings for workspace/organization visibility is available to MSP users and System Administrators only.
:::

## Security Considerations

1. **Role Assignment** — Regularly audit user role assignments to ensure they match current responsibilities
2. **Organization Access** — Verify that users only have access to organizations they should manage
3. **Feature Flags** — Ensure feature flags match subscription plans to prevent unauthorized access
4. **Run-As Accounts** — Protect Run-As Account credentials used for data collection
5. **System Administrator** — Limit System Administrator role assignments to essential personnel

:::caution[Security Best Practices]
- Never share user credentials
- Regularly review and remove inactive user accounts
- Use strong authentication methods
- Monitor access logs for unusual activity
:::

## Troubleshooting Access Issues

If you're experiencing access issues:

1. **Verify Role** — Confirm your user role has the required permissions
2. **Check Assignment** — Ensure you're assigned to the organization (for Regular Users)
3. **Feature Flags** — Verify the feature is enabled for the organization
4. **Route Guard** — Check if a route guard is blocking access
5. **Contact Administrator** — Reach out to your System Administrator if issues persist

:::note
Contact your vBox administrator if you need access to features that are not visible in your navigation menu.
:::

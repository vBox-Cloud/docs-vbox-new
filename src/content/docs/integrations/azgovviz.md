---
title: AzGovViz Integration
description: Azure Governance Visualizer for policy, RBAC, and management group insights.
sidebar:
  order: 2
---

## What is AzGovViz?

Azure Governance Visualizer (**AzGovViz**) is a PowerShell-based script that iterates through your Azure Tenant's Management Group hierarchy, starting from the root Management Group down to the Subscription, Resource Group, and Resource level. It collects data from various Azure APIs including Azure ARM, Microsoft Graph, and Storage. [Learn more](https://github.com/JulianHayward/Azure-MG-Sub-Governance-Reporting)

**vBox** integrates execution of the AzGovViz tool and presents its output as recommendations to improve your Operational Excellence.

## Recommendations

Currently, the following recommendations can be triggered as part of the "Operations" pillar in vBox:

- Review deprecated built-in policies
- Review Orphaned Custom Policy definitions
- Review Orphaned Role assignments
- Review Orphaned Custom PolicySet definitions
- Review Deprecated Custom PolicySet definition
- Review Orphaned Custom Role Definitions
- Review Owner permissions assignments to Service Principal
- Review custom Policy definition(s) built-in Policy rule parity
- Enable authorization for Management Group creation
- Check expired secrets and certificates
- Review orphaned Managed Identities
- Review external service principals

## Inventory

Additionally, the following Azure resources are available for further review:

### Policy Inventories
- Policy assignments
- Custom Policy definitions
- Custom PolicySet definitions

### RBAC Inventories
- Custom Role definitions
- Classic Administrators
- Role Assignment Entries
- Roles for Assignments
- Owner Assignments notGroup
- UserAccessAdmin notGroup
- Guests with High permissions

### MS Entra ID and Management Groups
- AAD SPs type=ManagedIdentity
- AAD SPs type=Application
- External AAD SPs type=App
- Management Groups

## Enable AzGovViz Integration

### Step 1: Grant Application Permissions

Approve advanced application consent. See the [Advanced Application Consent](/integrations/app-consent/) guide for detailed instructions.

### Step 2: Grant Management Group Permission

vBox needs read-only access to the root management group in your tenant. Assign the **"Reader"** role to the **"vBox Advanced Data Reader"** Service Principal at the root management group scope.

#### Prerequisites

Ensure you have the necessary permissions to assign roles at the Root Management Group level. By default, no one has access to the Root Management Group. Microsoft Entra Global Administrators can elevate their access to gain the required permissions.

#### Instructions

1. **Elevate access** (if needed):
   - Sign in to the Azure portal as a Global Administrator
   - Navigate to **Microsoft Entra ID**
   - In the left-hand menu, select **Properties**
   - At the bottom of the Properties page, click on **Access management for Azure resources**
   - Toggle **Elevate access to manage all Azure subscriptions and management groups** to **Yes**
   - Confirm the elevation when prompted

2. **Navigate to Root Management Group**:
   - In the Azure portal, search for and select **Management Groups**
   - If the Root Management Group is not visible, you may need to request access or ensure that it has been created

3. **Assign the Reader role**:
   - In the Management Groups blade, select the **Root Management Group** (often named "Tenant root group")
   - Click on **Access control (IAM)**
   - Click on the **Role assignments** tab
   - Click **Add** and select **Add role assignment**
   - In the **Role** dropdown, select **Reader**
   - In **Assign access to**, choose **User, group, or service principal**
   - Click **Select members** and search for **"vBox Advanced Data Reader"**
   - Select the service principal and click **Select**
   - Click **Review + assign** to finalize

:::caution
Changes may take up to 10 minutes to apply, as some time is required for granted permissions to take effect across your entire Azure environment.
:::

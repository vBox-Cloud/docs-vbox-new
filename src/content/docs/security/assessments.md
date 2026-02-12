---
title: Security Assessments
description: Security assessment management for MSP users.
sidebar:
  order: 6
---

:::note[MSP Feature]
Security Assessments are available only for Organization Contributors (MSP) and System Administrators.
:::

The Security Assessments page allows Organization Contributors to create and manage security assessments for their customers, providing structured evaluation and reporting of security posture improvements.

## Assessments Grid

The main assessments grid displays all available security assessments with the following columns:

| Column | Description |
|--------|-------------|
| **Name** | Assessment name or identifier |
| **Created By** | User who created the assessment |
| **Updated Date** | Last modification timestamp |
| **Status** | Current assessment status (see Status Values below) |
| **Download** | Download button to export assessment data |
| **Action** | Available actions (Edit or Delete) |

## Status Values

Assessments can have one of the following statuses:

| Status | Description |
|--------|-------------|
| **In Progress** | Assessment is currently being created or modified |
| **Ready** | Assessment is complete and ready for use |
| **Warning** | Assessment has warnings that need attention |
| **Error** | Assessment encountered an error during processing |

:::caution
Assessments with "Error" status may require investigation or recreation. Check the assessment details for specific error information.
:::

## Actions

Available actions for managing assessments:

| Action | Description |
|--------|-------------|
| **Edit** | Modify an existing assessment's properties and configuration |
| **Delete** | Remove an assessment from the system |
| **Download** | Export assessment data in various formats |

:::tip
Use the Download action to export assessment data for reporting, compliance documentation, or sharing with customers.
:::

## Auto-Refresh

The assessments grid automatically refreshes every **10 seconds** to ensure you're viewing the most up-to-date assessment status and data.

:::note
The auto-refresh feature ensures that status changes (such as assessments moving from "In Progress" to "Ready") are reflected in real-time without manual page refresh.
:::

## Route

The Security Assessments feature uses the following route:

- `/security/assessment` - Main assessments management page (MSP-only)

:::caution[Access Restriction]
Only MSP (Managed Service Provider) users can access the Security Assessments page. Regular users will not see this page in the navigation.
:::

## Use Cases

Security Assessments are useful for:

- **Customer Onboarding** - Create initial security assessments for new customers
- **Periodic Reviews** - Generate regular security posture evaluations
- **Compliance Reporting** - Document security improvements over time
- **Remediation Tracking** - Track progress on security recommendations and improvements

![Security Assessments Dashboard](/images/security-assessments-dashboard.png)

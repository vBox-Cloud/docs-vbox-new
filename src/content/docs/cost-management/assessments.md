---
title: Cost Assessments
description: Cost assessment management for MSP users.
sidebar:
  order: 5
---

:::note[MSP Feature]
Cost Assessments are available only for MSP (Managed Service Provider) users.
:::

The **Cost Assessments** page allows MSP users to create and manage cost assessments for their customers, providing structured evaluation and reporting of cost optimization opportunities. Assessments enable MSPs to deliver comprehensive cost analysis reports to their clients.

## Assessments Grid

<!-- TODO: Add screenshot of Assessments grid -->

The main grid displays all cost assessments with the following columns:

| Column | Description |
|--------|-------------|
| **Assessment Name** | Name of the cost assessment |
| **Results On** | Date when assessment results were generated |
| **Period Start** | Start date of the assessment period |
| **Period End** | End date of the assessment period |
| **Status** | Current status of the assessment (e.g., Running, Completed, Paused) |
| **Results** | Download link for assessment results |
| **Action** | Quick actions available for the assessment |
| **Deployed By** | User who created or deployed the assessment |

### Auto-Refresh

<!-- TODO: Add screenshot of auto-refresh indicator -->

The assessments grid automatically refreshes every 10 seconds to display the latest status updates, ensuring you always see current assessment progress and results.

:::tip
The auto-refresh ensures you don't need to manually refresh the page to see assessment status changes or newly completed assessments.
:::

## Assessment Profile Page

<!-- TODO: Add screenshot of Assessment Profile page -->

Clicking on an assessment opens its detailed profile page, which provides comprehensive information and management capabilities.

### Assessment Information

The profile page displays:

- **Organization** — The customer organization associated with the assessment
- **Assessment Period** — Start and end dates for the assessment
- **Status Indicators** — Visual indicators showing the current state of the assessment

### Assessment Actions

<!-- TODO: Add screenshot of action buttons -->

The profile page provides a comprehensive set of actions for managing assessments:

| Action | Description |
|--------|-------------|
| **Open** | View detailed assessment results and analysis |
| **Deploy** | Deploy the assessment to begin analysis |
| **Resume** | Resume a paused assessment |
| **Run** | Execute or re-run the assessment |
| **Shutdown** | Stop a running assessment |
| **Delete** | Remove the assessment (use with caution) |
| **Download** | Download assessment results and reports |
| **Send to ITSM** | Export assessment data to IT Service Management systems |

:::caution
Deleting an assessment permanently removes it and all associated data. Ensure you have downloaded any needed results before deletion.
:::

## Create Assessment Modal

<!-- TODO: Add screenshot of Create Assessment modal -->

To create a new cost assessment:

1. Click the **Create Assessment** button
2. Fill in the assessment details in the modal

### Assessment Name

- **Default Name** — The modal automatically suggests a name in the format: `Assessment YYYY-MM-DD` (e.g., "Assessment 2026-02-11")
- **Custom Name** — You can override the default with a custom name that better describes the assessment

### Manual Mode

- **Manual Mode Checkbox** — Enable this option to run the assessment in manual mode
- **Manual Mode** — Allows more control over the assessment process and timing

:::tip
Use descriptive assessment names that include the customer name or project identifier to make assessments easier to find and manage.
:::

## Assessment Workflow

1. **Create** — Create a new assessment with specified dates and settings
2. **Deploy** — Deploy the assessment to begin data collection and analysis
3. **Monitor** — Watch the status as the assessment runs (auto-refreshes every 10 seconds)
4. **Review** — Open the assessment to review results when complete
5. **Share** — Download results or send to ITSM systems for client reporting
6. **Manage** — Use Resume, Shutdown, or Delete actions as needed

## Best Practices

1. **Use Descriptive Names** — Include customer name, date, or project identifier in assessment names
2. **Set Appropriate Periods** — Choose assessment periods that align with reporting cycles or project timelines
3. **Monitor Status** — Keep the page open to watch assessment progress via auto-refresh
4. **Download Results** — Download assessment results promptly after completion for client reporting
5. **Use ITSM Integration** — Leverage the "Send to ITSM" feature to streamline client communication
6. **Manual Mode** — Use manual mode when you need more control over assessment timing or execution

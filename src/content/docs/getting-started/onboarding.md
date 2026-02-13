---
title: Onboarding
description: Getting started with vBox — signing in, initial consent, and first steps.
sidebar:
  order: 2
---

This guide walks you through your first steps with vBox.

## Step 1: Sign In

Navigate to the vBox portal and click **Sign in with Microsoft**.

![vBox sign-in screen](../../../assets/images/auth/sign-in-screen.png)

You can sign in using any Microsoft account (work, school, or personal) that has been granted access to vBox.

## Step 2: Accept Consent

On your first sign-in, Microsoft will display a **Permissions requested** dialog for the "vBox Sign in" application. This basic consent allows vBox to:

- **View your basic profile** — name, picture, username, and email address

Review the permissions and click **Accept** to continue.

![Microsoft consent dialog](../../../assets/images/auth/sing-in-consent.png)

:::note
This is a one-time consent for basic profile access. You will not be asked again on subsequent sign-ins unless permissions change.
:::

## Step 3: Explore Your Dashboard

After signing in, you will land on the main dashboard. Use the sidebar navigation to explore:

- **Cost Summary** — Overview of your Azure spend and savings opportunities
- **Security Summary** — Your current security posture and top recommendations
- **Operations Summary** — Operational health metrics and improvement areas

:::tip
Start with the Cost Management section to identify quick wins — many organizations find immediate savings opportunities within the first review.
:::

## Step 4: Explore Recommendations

Each module (Cost, Security, Operations) has a **Recommendations** page where vBox surfaces actionable improvements. You can:

- Filter and group recommendations by severity, category, subscription, and more
- Create **Tasks** to track remediation progress
- Export recommendations to Excel for offline review

## For Organization Contributors (MSP)

If you have the Organization Contributor role, you have additional onboarding steps:

### Enable Features

Configure desired capabilities for each customer organization through the [Customer Configuration Wizard](/administration/customers/#customer-configuration-wizard):

- **Security** — Secure Score tracking and security recommendations
- **Operations** — Observability Score and operational recommendations
- **Cost Details** — Detailed cost analysis and cost recommendations
- **BI Analytics** — Embedded Metabase dashboards
- **Tasks** — Task management for recommendation follow-up

### Azure Authorization (OBO)

vBox requires **On-Behalf-Of (OBO)** authorization for operations that access your Azure resources directly. You will be prompted to authorize when:

- **Mapping subscriptions** during organization creation or editing
- **Running** manual assessments, deploying environments, or starting assessments

See [OBO Authentication](/administration/users-and-roles/#obo-authentication-on-behalf-of) for details.

### Grant Permissions for advanced features

Follow the integration guides to set up required consent and role assignments for customer organizations:

- [Advanced Application Consent](/integrations/app-consent/) — Grant necessary permissions for advanced vBox features
- [MS Defender XDR Integration](/integrations/defender-xdr/) — Enable CIS M365 Foundation Benchmark recommendations
- [AzGovViz Integration](/integrations/azgovviz/) — Set up Azure Governance Visualizer



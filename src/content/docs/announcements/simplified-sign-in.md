---
title: "Simplified Sign-In & Improved Security Permissions"
description: A more secure, streamlined way to access vBox — with only the permissions you need.
sidebar:
  order: 1
  badge:
    text: New
    variant: tip
---

We are rolling out an update to the vBox sign-in experience. This change improves security by reducing the permissions required to use vBox and introduces a redesigned sign-in page.

## What Is Changing

### New Sign-In Page

You will notice a refreshed sign-in screen when you next log in to vBox. You can continue to sign in using your Microsoft account as before — no new credentials or accounts are needed.

![New vBox sign-in page](../../../assets/images/auth/sign-in-screen.png)

### Simplified Consent for All Users

Previously, every user who signed in to vBox for the first time was asked to accept a broad application consent that included read-only access to your Azure infrastructure — regardless of whether your role required it. This meant users who only needed to view dashboards and reports were granting more permissions than necessary.

With this update, the first-time consent has been reduced to the absolute minimum: vBox will only request permission to read your basic account information (name, email, and organization). No Azure infrastructure access is requested at sign-in.

![Simplified consent dialog](../../../assets/images/auth/sing-in-consent.png)

#### Before vs. After

| | Before | After |
|---|--------|-------|
| **First sign-in consent** | Broad consent including Azure infrastructure read access for all users | Lightweight consent for basic profile information only |
| **Azure access** | Granted to every user at sign-in, even if not needed | Granted only to Contributors when they perform Azure operations |
| **Permissions scope** | Same permissions regardless of role | Permissions match your actual role and responsibilities |

### Additional Consent Only When Needed

Users who need to set up data collection, map Azure subscriptions, or run assessments (Organization Contributors) will be prompted to accept an additional consent at the point they perform that action. This additional consent grants the Azure environment access required for those specific operations.

If your role does not involve these tasks, you will never see this prompt.

:::tip[Organization Contributors]
If you run assessments or configure customer environments, you will see an additional authorization prompt the first time you perform one of those actions after the update. This is the On-Behalf-Of (OBO) authorization flow — see [OBO Authentication](/administration/users-and-roles/#obo-authentication-on-behalf-of) for details.
:::

## What You Need to Do

For most users, nothing changes in your day-to-day workflow. When you next sign in after the update:

1. **See the new sign-in page** — click **Sign in with Microsoft** as usual
2. **Accept the new consent** — you may be asked to accept a new, lightweight consent for basic profile access. Click **Accept**
3. **Continue using vBox** — everything else works exactly as before

:::note
The new consent prompt is a one-time event. You will not be asked again on subsequent sign-ins unless permissions change.
:::

## Why We Made This Change

This update follows the **principle of least privilege** — users should only be asked for the permissions they actually need. By separating the consent into a basic sign-in consent and an optional Azure access consent, we ensure that:

- **Read-only users** never grant unnecessary infrastructure permissions
- **Contributors** grant Azure access only when performing operations that require it
- **Your data** is better protected with tighter, role-appropriate permissions

This is a security improvement that benefits everyone.

## Questions?

If you have any questions about this update, reach out to us at [help@vboxcloud.com](mailto:help@vboxcloud.com).

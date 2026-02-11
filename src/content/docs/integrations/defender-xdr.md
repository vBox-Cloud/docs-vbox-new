---
title: MS Defender XDR Integration
description: Enable CIS M365 Foundation Benchmark recommendations using Microsoft Defender XDR.
sidebar:
  order: 1
---

## What is Defender XDR?

Microsoft Defender XDR is a unified pre- and post-breach enterprise defense suite that natively coordinates detection, prevention, investigation, and response across endpoints, identities, email, and applications to provide integrated protection against sophisticated attacks.

Microsoft Defender XDR helps security teams protect and detect their organizations by using information from other Microsoft security products, including:

- [Microsoft Defender for Endpoint](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint)
- [Microsoft Defender for Office 365](https://learn.microsoft.com/en-us/defender-office-365/mdo-about#defender-for-office-365-plan-1-vs-plan-2-cheat-sheet)
- [Microsoft Defender for Identity](https://learn.microsoft.com/en-us/defender-for-identity/what-is)
- [Microsoft Defender for Cloud Apps](https://learn.microsoft.com/en-us/defender-cloud-apps/what-is-defender-for-cloud-apps)
- [Microsoft Defender Vulnerability Management](https://learn.microsoft.com/en-us/defender-vulnerability-management/defender-vulnerability-management)
- [Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction)
- [Microsoft Entra ID Protection](https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection)
- [Microsoft Data Loss Prevention](https://learn.microsoft.com/en-us/microsoft-365/compliance/dlp-learn-about-dlp)
- [App Governance](https://learn.microsoft.com/en-us/defender-cloud-apps/app-governance-manage-app-governance)
- [Microsoft Purview Insider Risk Management](https://learn.microsoft.com/en-us/purview/insider-risk-management-solution-overview)

With the integrated Microsoft Defender XDR solution, security professionals can stitch together the threat signals that each of these products receive and determine the full scope and impact of the threat. [Learn More](https://learn.microsoft.com/en-us/defender-xdr/microsoft-365-defender)

**vBox** uses Defender XDR as a data source for the CIS M365 Foundation Benchmark report to show relevant recommendations on how to strengthen your Microsoft 365 security.

## Enable MS Defender XDR Integration

### Grant Application Permissions

Approve advanced application consent. See the [Advanced Application Consent](/integrations/app-consent/) guide for detailed instructions.

---
title: Vulnerabilities and Secrets Recommendations
description: Granular vulnerability management powered by Microsoft Defender for Cloud.
sidebar:
  order: 3
---

## Vulnerabilities Recommendations

vBox supports Defender for Cloud's recommendations related to vulnerabilities and secrets findings.

The following recommendations were inverted so that each finding (check) inside them became a separate recommendation in vBox:

1. Azure Resource Manager deployments should have secrets findings resolved
2. EDR configuration issues should be resolved on virtual machines
3. Machines should be configured securely (powered by MDVM)
4. Machines should have secrets findings resolved
5. Machines should have vulnerability findings resolved
6. SQL databases should have vulnerability findings resolved
7. SQL servers on machines should have vulnerability findings resolved
8. System updates should be installed on your machines (powered by Azure Update Manager)
9. Vulnerabilities in security configuration on your Linux machines should be remediated (powered by Guest Configuration)
10. Vulnerabilities in security configuration on your Windows machines should be remediated (powered by Guest Configuration)

This allows for more granular vulnerability issue addressing and transparent vBox task management.

:::note
For the full list (~2,000) of newly added recommendations, see the [Vulnerability-Findings-Recommendations.xlsx](https://github.com/vBox-Cloud/docs-vbox-new/blob/main/Docs/Security/Vulnerability-Findings-Recommendations.xlsx) reference file.
:::

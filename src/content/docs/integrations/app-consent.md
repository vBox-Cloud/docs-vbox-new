---
title: Advanced Application Consent
description: Grant necessary permissions for advanced vBox features.
sidebar:
  order: 3
---

## Grant Application Permissions

Follow these steps to grant the required permissions for advanced vBox features such as [Defender XDR Integration](/integrations/defender-xdr/) and [AzGovViz Integration](/integrations/azgovviz/).

### Step 1: Navigate to the Consent URL

Open the following URL in your browser:

```
https://login.microsoftonline.com/common/adminconsent?client_id=1af8d16a-5882-47e0-a5f6-c1035ee5b398
```

After successful login to your organization, you will see the Application Consent approval window.

<!-- TODO: Add screenshot of Application Consent approval window -->

### Step 2: Accept the Consent

Click **Accept** to grant consent to the **"vBox Advanced Data Reader"** Service Principal.

:::note
You must be signed in as a **Global Administrator** or a user with the **Privileged Role Administrator** role to approve this consent.
:::

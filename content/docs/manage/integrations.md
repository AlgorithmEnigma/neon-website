---
title: Manage integrations
enableTableOfContents: true
isDraft: false
---

Neon supports integrations with partners such as Vercel. You can view and revoke integrations for a Neon project from the **Integrations** page in the Neon Console.

## View integrations

To view integrations for a project:

1. Navigate to the [Neon Console](https://console.neon.tech).
1. Select a project.
1. Select **Integrations**.

## Revoke integrations

<Admonition type="note">
For the [Neon integration with Vercel](https://vercel.com/integrations/neon), revoking an integration prevents the integration from creating database branches for preview deployments. It does not remove the integration in Vercel or the Vercel environment variables that contain database connection details. To fully remove a Neon-Vercel integration, do so from Vercel. For instructions, see [Manage you integration with Vercel](/docs/guides/vercel#manage-your-neon-integration).
</Admonition>

To revoke an integration:

1. Navigate to the [Neon Console](https://console.neon.tech).
1. Select a project.
1. Select **Integrations**.
1. Identify the integration you want to remove and click **Revoke**.

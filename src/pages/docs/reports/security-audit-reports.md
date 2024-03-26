---
title: "View reports about detected, unresolved, and resolved secrets"
updated: 2023-12-15
---

> **[Secret Scanner reports are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing/)**

The **Secret Scanner** report provides Team Admins and [Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) with insights into the status of detected secrets, enabling you to make informed decisions that improve the security and compliance of your Postman team. The report covers detected, unresolved, and resolved secrets within your organization that have been found by Postman's [Secret Scanner](/docs/administration/managing-your-team/secret-scanner/).

To view the report, open Postman and select **Team > Team Settings** in the Postman header. Select **Secret Scanner** in the left sidebar, then select the **Reports** tab.

You can filter the report by time and by workspace visibility. The report provides the following information:

* **Detected and resolved secrets** - The number of detected and resolved secrets found by the Secret Scanner.
* **Unresolved secrets based on elements visibility** - The number of unresolved secrets found in public and team elements.
* **Workspaces with unresolved secrets** - A list of workspaces containing unresolved secrets, including each workspace's number of unresolved secrets and visibility status.
* **Unresolved secrets based on secret type** - A list of secret types and how often they've been detected by the Secret Scanner.
* **Published documentation with unresolved secrets** - A list of published documentation containing unresolved secrets, including a link to the collection, the date it was published, the user who published it, and the number of unresolved secrets within it.

For more details, select an element to open the **Secrets detected** tab of the [Secret Scanner dashboard](https://go.postman.co/settings/team/secret-scanner/findings). **Secrets detected** will automatically include any workspace or secret type filters based on your selected element, enabling you to take immediate action towards resolution.

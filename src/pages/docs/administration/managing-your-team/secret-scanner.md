---
title: "Secret Scanner"
updated: 2023-12-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Token Scanner | Postman Level Up"
    url: "https://youtu.be/9XxkqPQF-Rw"
  - type: link
    name: "Securing APIs | Postman Enterprise"
    url: "https://youtu.be/tiYgp4QEwZQ"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Updates to the Postman Secret Scanner"
    url: "https://blog.postman.com/updates-to-the-postman-secret-scanner/"
  - type: link
    name: "How we’re protecting your Postman API keys in GitLab"
    url: "https://blog.postman.com/protecting-your-postman-api-keys-in-gitlab/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman Security"
    url:  "https://www.postman.com/postman/workspace/62d58d93-7e0c-45bf-9daa-cc8e531fc344"
---

The Postman Secret Scanner scans public workspaces and published documentation to detect any exposed secrets. It checks all of the collections, global variables, environment variables, API schemas, and documentation in public workspaces to safeguard your organization from potential threats and prevent malicious users from accessing any exposed secrets. It also scans all of the documentation your team has [published](/docs/publishing-your-api/publishing-your-docs/), regardless of the type of workspace it's found in.

The Secret Scanner is available on all Postman plans and is turned on by default. If you're on an [Enterprise Ultimate plan](https://www.postman.com/pricing), Secret Scanner will monitor team workspaces in addition to public workspaces and documentation.

## Contents

* [How Secret Scanner works](#how-secret-scanner-works)
* [Secret Scanner dashboard](#secret-scanner-dashboard)
    * [Resolve detected secrets](#resolve-detected-secrets)
    * [Secret Scanner summary emails](#secret-scanner-summary-emails)
* [Manage Secret Scanner findings with the Postman API](#manage-secret-scanner-findings-with-the-postman-api)
* [Supported secrets](#supported-secrets)
    * [Default patterns](#default-patterns)
    * [Custom patterns](#custom-patterns)
* [Protect Postman API keys in GitHub](#protect-postman-api-keys-in-github)
* [Protect Postman API keys in GitLab](#protect-postman-api-keys-in-gitlab)

## How Secret Scanner works

Postman's Secret Scanner is turned on by default for all Postman teams. It follows all updates made by team members and scans them for [supported secrets](#supported-secrets).

Secret Scanner monitors your team's public workspaces and the collections, environments, global variables, API schemas, and documentation contained within them for exposed secrets. It also monitors all of the documentation your team has [published](/docs/publishing-your-api/publishing-your-docs/), regardless of the [type of workspace](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) it's found in. If you're on an Enterprise Ultimate plan, Secret Scanner will also monitor collections and APIs in your team workspaces.

Postman delivers scan results in the [Secret Scanner dashboard](https://go.postman.co/settings/team/secret-scanner/). If an exposed secret is found, Postman notifies you by email and in-app notification. You can also set up Postman's [Slack integration](/docs/integrations/available-integrations/slack/) to alert you in Slack if this occurs.

## Secret Scanner dashboard

> **[The Secret Scanner dashboard is available on Postman Enterprise plans. Secret Scanner reports are available on the Postman Enterprise Ultimate plan.](https://www.postman.com/pricing/)**

[Team Admins and Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can view detected secrets, configure [default](#default-patterns) and [custom](#custom-patterns) patterns, and review [Secret Scanner reports](/docs/reports/security-audit-reports/) in the [Secret Scanner dashboard](https://go.postman.co/settings/team/secret-scanner/). To open the dashboard, select **Team > Team Settings** in the Postman header. Then, select **Secret Scanner** in the left sidebar.

<img alt="Secret Scanner dashboard" src="https://assets.postman.com/postman-docs/v10/secret-scanner-dashboard-v10-21.jpg"/>

### Resolve detected secrets

[Team Admins and Super Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can review the [default](#default-patterns) and [custom](#custom-patterns) secrets that the Secret Scanner has found in the **Secrets detected** tab of the [Secret Scanner dashboard](https://go.postman.co/settings/team/secret-scanner/findings). You can filter findings by visibility type, workspace name, and secret type. To view the details for a detected secret, select it from the list.

> Admins and Super Admins can access all identified secrets within a team, including ones in public workspaces. Workspace Admins can also view secrets within the workspaces they manage.

<img alt="Resolve detected secret" src="https://assets.postman.com/postman-docs/v10/secret-scanner-view-detected-secret-v10.18.jpg"/>

Each detected secret shows where it was found and when it was detected. To view the SHA256 hash value of a detected secret, hover over the partially hidden value under its name and select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px">.

To resolve a detected secret, select **Unresolved** and then select the reason for resolving it. You can resolve a finding with the following reasons:

* **Revoked** - This secret has been revoked.
* **False positive** - This secret is not valid.
* **Won't fix** - This secret is not relevant.

<img alt="Resolve detected secret" src="https://assets.postman.com/postman-docs/v10/secret-scanner-resolve-detected-secret-v10.18.jpg"/>

### Secret Scanner summary emails

Team Admins, Super Admins, and Workspace Admins can stay informed about Secret Scanner findings by subscribing to weekly or monthly summary emails. Subscribers will receive a monthly summary email on the first of every month or a weekly summary email every Monday.

Navigate to [Notification Preferences](https://go.postman.co/settings/me/notifications) or select your avatar in the Postman header, then select **Settings > Notifications** to view the Secret Scanner summary option. From there, you can select the box for either weekly or monthly summaries—or both—and save your preferences.

## Manage Secret Scanner findings with the Postman API

> **[The Secret Scanner Postman API endpoints are available on the Postman Enterprise Ultimate plan.](https://www.postman.com/pricing/)**

Team Admins, Super Admins, and Workspace Admins can access Secret Scanner findings through the Postman API. Using the Postman API enables you to create custom automated workflows to retrieve and resolve identified secrets. To learn more, see the [Postman API documentation](https://go.pstmn.io/live-docs-api).

## Supported secrets

The Secret Scanner searches for a variety of secrets [by default](#default-patterns). You can also add your team's proprietary third-party app tokens that aren't supported yet using [custom patterns](#custom-patterns).

### Default patterns

By default, the Secret Scanner checks for tokens issued by common service providers including Amazon, Google, GitHub, Stripe, and Twilio. To view the complete list of default patterns, open the [Secret Scanner](https://go.postman.co/settings/team/secret-scanner/alerts) and select **Configure patterns**.

### Custom patterns

> **[Custom patterns are available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

You can use custom patterns to scan your team's proprietary tokens and any third-party app tokens that aren't scanned by default. You can also [dry run custom patterns](#dry-run-custom-patterns) before adding them to the Secret Scanner, enabling you to test the results that the custom pattern returns.

Your team can add a total of five patterns. You must be a Community Manager or team member with both Developer and Admin roles to add custom patterns.

To add custom patterns, do the following:

1. Open Postman and select **Team > Team Settings** in the Postman header. Select **Secret Scanner** in the left sidebar, then select the **Configure patterns** tab.
1. In the **Custom patterns** section, select **+**.
1. In the **Pattern details** section, add the following details for the custom token:

    * **Name** - The name of your custom pattern.
    * **Regex** - The regular expression that specifies the pattern of the secrets you want to find a match for.
    * **Sample value** - A sample value used to validate the regular expression pattern.

1. In the **Scan activation** section, select one of the following:

    * **Add pattern to secret scanner** - Add the secrets the Secret Scanner finds to the **Secrets detected** tab in the dashboard. By default, the **Scan existing elements** checkbox is selected, meaning the Secret Scanner will use the custom pattern to scan existing elements. If you'd like to only scan new elements, clear the **Scan existing elements** checkbox.

    * **Dry run the pattern first with select workspaces** - Dry run the custom pattern before adding it to the Secret Scanner. You can select up to 20 public or team workspaces for the dry run. The results of the dry run won't be added to the **Secrets detected** tab in the dashboard. Learn more about [creating a custom pattern dry run](#dry-run-custom-patterns).

1. Select **Add Custom Pattern** or **Dry Run Pattern**, depending on the option you selected in the **Scan activation** section.

    <img alt="Create custom pattern" src="https://assets.postman.com/postman-docs/v10/create-custom-pattern-v10-21.jpg" width="500px"/>

To edit a custom pattern, select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px"> next to a custom pattern. Edit the name or regular expression, update the sample value, then select **Save**. If you edited the regular expression, select one of the following to confirm your changes:

* **Keep Existing Leaks** - Show detected secrets in the **Secrets detected** tab that are associated with earlier iterations of this custom pattern.
* **Remove Existing Leaks** - Remove detected secrets from the **Secrets detected** tab that are associated with earlier iterations of this custom pattern.

> When you edit a regular expression in a custom pattern, the updated regular expression is used to scan new elements only. To scan existing elements with the changes to the pattern, create a new custom pattern and make sure the **Scan existing elements** checkbox is selected.

To delete a custom pattern, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to a custom pattern. Then select **Delete** to confirm. When you delete a custom pattern, all detected secrets associated with this pattern will be removed from the **Secrets detected** tab in the dashboard.

#### Dry run custom patterns

When you create a custom pattern, you can choose to dry run the regular expression pattern before adding it to the Secret Scanner. This enables you to test the results that the regular expression pattern returns. You can dry run the pattern on up to 20 public or team workspaces. If the dry run works as expected, you can add the custom pattern to the Secret Scanner, enabling your team to review the results in your dashboard.

> The results of the dry run won't be added to the **Secrets detected** tab in the dashboard. You must manually add the custom pattern to the Secret Scanner.

To dry run a custom pattern, do the following:

1. [Add a custom pattern](#custom-patterns), and select **Dry run the pattern first with select workspaces** in the **Scan activation** section.
1. Select public or team workspaces to scan. You can select up to 20 workspaces.
1. Select **Dry Run Pattern**.

    <img alt="Create custom pattern dry run" src="https://assets.postman.com/postman-docs/v10/dry-run-custom-pattern-v10-21.jpg" width="500px"/>

To view the dry run results and add the custom pattern, do the following:

1. Select the **Configure patterns** tab.
1. In the **Custom patterns** section, select **View results** next to the custom pattern when the dry run is completed. You can select results from the dry run to view more details.

    > To run the dry run again, select **Re-run Scan** in the top right of **Results from dry run** page.

1. If the dry run performed as expected, you can add the custom pattern to the Secret Scanner, enabling you to view the results in the dashboard. In the **Results from dry run** page, select **Add Pattern to Secret Scanner**.

    <img alt="Custom pattern dry run results" src="https://assets.postman.com/postman-docs/v10/dry-run-results-v10-21.jpg"/>

    > If you want to make changes to the dry run, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to the custom pattern in the dashboard. Then [add the custom pattern](#custom-patterns) and [dry run](#dry-run-custom-patterns) it with your changes.

1. To confirm, select one of the following:

    * **Ignore Existing Elements** - Scan only new elements with this custom pattern.
    * **Scan Existing Elements** - Scan new and existing elements with this custom pattern.

## Protect Postman API keys in GitHub

Postman also works with GitHub to ensure that your Postman API keys are secure. If you commit a valid Postman API key to a public GitHub repository, Postman notifies you by email and in-app notification. You can also set up Postman's [Slack integration](/docs/integrations/available-integrations/slack/) to alert you in Slack if this occurs.

It's recommended you delete the exposed API key in your [API keys dashboard](https://go.postman.co/settings/me/api-keys). You can then [generate a new API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) to continue working with the Postman API.

## Protect Postman API keys in GitLab

> This feature is available on GitLab Ultimate plans.

Postman works with GitLab to protect your Postman API keys in GitLab public repositories. If you accidentally commit a valid Postman API key to a public GitLab repository, Postman notifies you by email and in-app notification.

It's recommended you delete the exposed API key in your [API keys dashboard](https://go.postman.co/settings/me/api-keys) immediately. You can then [generate a new API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) to continue working with the Postman API.

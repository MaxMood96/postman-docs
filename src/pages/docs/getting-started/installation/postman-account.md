---
title: "Manage your Postman account"
order: 4.1
page_id: "postman_account"
updated: 2021-12-9
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Enable Two-Factor Authentication"
    url: "https://youtu.be/nmzEmrVWGQw"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Secure Your Postman Account with Two-Factor Authentication"
    url: "https://blog.postman.com/secure-your-postman-account-with-two-factor-authentication/"
warning: false
---

Having a free Postman account enables you to [sync](/docs/getting-started/basics/syncing/) and back up your work so that you can access it from different machines. With a Postman account, you can also [collaborate](/docs/collaborating-in-postman/collaborate-in-postman-overview/) with others on your API projects.

> If you need help with your Postman account, you can contact the Postman [support team](https://www.postman.com/support/) or check out the Help Center's [account FAQs](https://support.postman.com/hc/en-us/sections/8180192954903-Account).

## Contents

* [Signing up for a Postman account](#signing-up-for-a-postman-account)
* [Signing in to Postman](#signing-in-to-postman)
* [Updating your account settings](#updating-your-account-settings)
    * [Changing your email address](#changing-your-email-address)
    * [Resetting your password](#resetting-your-password)
    * [Setting up two-factor authentication](#setting-up-two-factor-authentication)
    * [Turning off two-factor authentication](#turning-off-two-factor-authentication)
    * [Deleting your account](#deleting-your-account)
* [Updating your notification preferences](#updating-your-notification-preferences)
* [Managing your active sessions](#managing-your-active-sessions)
* [Upgrading your account](#upgrading-your-account)
* [Account security policies and standards](#account-security-policies-and-standards)
* [Next steps](#next-steps)

## Signing up for a Postman account

Before you sign up for a Postman account, either download and open the [desktop app](https://www.postman.com/downloads/) or go to the [web app](https://go.postman.co/home/).

Postman prompts you to sign in or sign up. Select __Create Account__. You can sign up using an email address or using your Google account:

* **Email** - Enter your email and create a username and password. Select the checkbox to agree to the __Terms of Use__, which you can view by selecting the link, and select __Create free account__. Postman will send you an email to confirm your account. Follow the instructions in the email to complete your account setup.
* **Google account** - Select __Sign up with Google__ and follow the instructions.

When you sign up for a Postman account, you'll be prompted to provide some information about yourself, including your name and role, to help customize your Postman experience. Enter your details and select __Continue__.

Your new Postman profile will be visible to collaborators and anyone viewing resources you share or publish. To learn more about your Postman profile and how to customize it, see [Customizing your Postman profile](/docs/getting-started/installation/postman-profile/).

### Creating or joining a team

During the sign up process, you have the option to create or join a [team](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/):

* **Joining a team** - If you sign up with your company email and your company has a Postman account with team discovery enabled, there will be a list of [teams you can join](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/#finding-teams-within-your-organization).
* **Creating a team** - To create a team and optionally invite collaborators, select __Collaborate with people in new team__. Enter your team name and URL, then select __Continue__.

> To learn more about joining and creating teams, see the [Create, join, and manage teams in Postman](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/).

## Signing in to Postman

You can sign in to the Postman desktop app by selecting **Sign In** in the upper-right corner or by selecting **Home** in the upper-left corner, then **Sign In**. You can also go to [Postman's website](https://www.postman.com/) and select **Sign In** in the upper-right corner of the page.

When you sign in using the Postman desktop app, the app will open a new screen that directs you to _Sign in from your browser to continue_. Your default browser will automatically open a webpage asking you to sign in to Postman. If your browser doesn't open within a few seconds, select either **open it manually** or **copy the URL**.

> You can opt out of the sign-in process at any time by going back to Postman and selecting **Skip and take me to Postman Desktop App**.

Sign in to Postman in your browser by entering your account credentials or signing in with Google. If you're signing in to a Postman Professional or Enterprise team with single-sign on (SSO) enabled, opt to **Sign in with SSO**. To learn more, see [Signing in to an SSO team](/docs/administration/sso/user-sso/).

> If this is your first time signing in to Postman with SSO, you might need to [link your account to Postman](#linking-your-account-to-postman).

Select **Stay signed in** if you want to remain signed in until you are inactive for 30 days before being asked to re-authenticate. Clear this checkbox if you don't want to remain signed in on the computer you're working on. Note that Postman will prompt you to sign in again after 30 minutes.

> Your team may have set up a maximum session duration for all team members. In that case, sessions will be revoked based on the team setting.

If you've set up [two-factor authentication](#setting-up-two-factor-authentication) (2FA), Postman will prompt you to enter the verification code from your authenticator app and select **Verify**.

> If you've lost access to your device and can't access your authenticator app, select **Use a recovery code**.  If you've lost your recovery codes, [email Postman support](mailto:help@postman.com) from a registered email address for help.

After you sign in, you will be redirected back to the Postman desktop app.

If you're a member of multiple Postman teams with varying authentication methods, you must sign in to those teams separately. To do so, select your avatar in the Postman header, then select the team to proceed.

> You must complete the process of signing in within five minutes once you begin the process in the Postman desktop app. If you go beyond this time, you must return to the Postman desktop app and restart the sign in process.

### Linking your account to Postman

If you sign in to Postman with SSO for the first time, and use an email address associated with an existing account, you may need to link your identity provider (IdP) account to Postman. This is required if your email address doesn't use a domain or subdomain that your organization has [verified](/docs/administration/domain-verification-and-capture/add-and-verify-a-domain/).

To link your IdP account to Postman, do the following:

1. [Sign in to Postman](#signing-in-to-postman) with SSO.
1. Enter your Postman account credentials, and then select **Sign in to link your SSO account**.

You only need to link your IdP account to Postman the first time you sign in with SSO.

### Switching between accounts

You can sign in to multiple accounts at the same time in Postman. Select your avatar in the top right to switch between accounts or select __+ Add Account__ to sign in with another one.

## Updating your account settings

You can manage account settings including your email address, password, and workspace data on your [account settings](https://go.postman.co/settings/me/account/) page.

### Changing your email address

If you're a member of a free or paid team, you can change the email address associated with your Postman account. Open your [account settings](https://go.postman.co/settings/me/account/) page. Select your avatar in the Postman header, then select **Settings > Account**. Edit your email address and select **Update Email Address** to save changes.

If you're a member of an Enterprise team with SCIM enabled, you must contact a Team Admin to change the email address associated with your Postman account. A Team Admin must edit your email address in your SCIM identity provider.

### Resetting your password

If you're on a Professional, Basic, or Free plan, you can change your password if you're already signed in by navigating to your [account settings](https://go.postman.co/settings/me/account/) page. Select your avatar in the Postman header, then select **Settings > Account**. Select **Change Password**.

If you aren't signed in to your Postman account, you can recover your username or reset your password from the [**Sign In**](https://identity.getpostman.com/login) page. Select **Trouble signing in?**. Enter your account email, select the **I'm not a robot** checkbox, and select **Submit**. Postman will send you an email with instructions for recovering access to your account.

> If you still have trouble signing in to your Postman account, contact [Postman support](https://support.postman.com/hc/en-us).

If you're on an Enterprise plan, you must contact your Team Admins to update the password associated with your Postman account.

### Setting up two-factor authentication

If you sign in to Postman using a username or email and a password, you can set up two-factor authentication for your account:

1. Open your [account settings](https://go.postman.co/settings/me/account/) page by selecting your avatar in the Postman header, then selecting **Settings > Account**.
1. Select **Enable 2FA**.

    > Enabling 2FA will revoke all of your [active Postman sessions](/docs/getting-started/installation/postman-account/#managing-your-active-sessions).

1. Install an authenticator app on your phone if you don't have one available, and have your password with you.
1. Select **Continue**.
1. Enter your password and select **Verify**.
1. Link your authenticator app, then enter the 6 digit authentication code generated by your app and select **Next**.
1. Download your recovery codes and store them in a secure location. If you lose your device, you'll be able to use one of the recovery codes to sign in. You can only use each recovery code once.
1. Select **Done**.

Once you've enabled two-factor authentication, you must provide both your password and the authentication code to sign in unless you [turn off two-factor authentication](#turning-off-two-factor-authentication).

If you're signed in to Postman and would like to regenerate your recovery codes, open your [account settings](https://go.postman.co/settings/me/account/) and select **Regenerate recovery codes**.

> If you lose access to your device and can't access your authenticator app, select **Use a recovery code** when signing in to Postman. If you've lost your recovery codes, [email Postman support](mailto:help@postman.com) from a registered email address for help.

### Turning off two-factor authentication

You can turn off two-factor authentication at any time:

1. Open your [account settings](https://go.postman.co/settings/me/account/) page by selecting your avatar in the Postman header, then selecting **Settings > Account**.
1. Select **Disable 2FA**.
1. Enter your password and select **Disable 2FA**.

You can [enable two-factor authentication](#setting-up-two-factor-authentication) again at any time in your account settings.

### Deleting your account

Deleting your account is an irreversible operation. Any data synced to your account will be deleted and no longer be accessible.

You must leave all Postman teams that you're a member of prior to deleting your account. To do so, see [Leaving a team](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/#leaving-a-team).

If you're a member of an Enterprise team with [SCIM](/docs/administration/scim-provisioning/scim-provisioning-overview/) enabled, you must contact a Team Admin to remove your Postman account from that team.

Once you're no longer a member of any Postman team, you can permanently delete your Postman account in your [account settings](https://go.postman.co/settings/me/account/). Select your avatar in the Postman header, then select **Settings > Account**. Select **Delete Account**. Before deleting your account, Postman will prompt you to sign in again to confirm that you own the account.

## Updating your notification preferences

You can update your [notification preferences](https://go.postman.co/settings/me/notifications/) by selecting your avatar in the Postman header, then selecting **Settings > Notifications**.

You can opt in to or out of email or in-app notifications about security, usage, monitors, and comments by selecting or clearing the checkboxes next to each item. Select **Update Preferences** to save changes.

In addition to email and in-app notifications, you can also send many notifications to Slack using the [Slack integration](/docs/integrations/available-integrations/slack/). After you add the Slack integration, you can select notification events in the **On Slack** column. These notifications are sent to Slack by the integration.

<img alt="Update notification preferences" src="https://assets.postman.com/postman-docs/v10/notification-preferences-v10-2.jpg" width="500px">

## Managing your active sessions

You can manage your [active Postman sessions](https://go.postman.co/settings/me/sessions/) by selecting your avatar in the Postman header, then selecting **Active Sessions**. You can view all of the devices you're signed in to Postman on and revoke any sessions you no longer use or recognize. You can also choose to **Revoke all sessions**.

<img alt="Active sessions" src="https://assets.postman.com/postman-docs/dashboard-active-sessions-revoke-v9.2.jpg">

## Upgrading your account

If you have a free account, you can upgrade it by navigating to [Postman](https://go.postman.co/) and selecting **Upgrade** in the top-right corner.

If you have a paid account, you can upgrade your Postman plan by navigating to your [billing dashboard](https://go.postman.co/billing/overview/) and selecting **Edit Plan** on the right. To learn more about upgrading and managing your Postman plan, see the [Billing](/docs/billing/billing/#changing-your-plan) guide.

> The cost of your upgraded plan or additional seats will be prorated based on the time left in your team's current billing cycle. For more information, [contact Postman's sales team](mailto:sales@postman.com).

## Account security policies and standards

Postman uses several technologies to ensure that your personal data is secure:

* Communication with Postman servers only happens through HTTPS and Secure WebSockets.
* Environment and global variables are encrypted so that only you can view them.

For more details on Postman's security policies and standards, visit the Postman [EULA](https://www.postman.com/legal/eula/), [security overview](https://www.postman.com/security), and [privacy policy](https://www.postman.com/licenses/privacy).

## Next steps

Now that you have created a Postman account, you're ready to start working! When you are signed in to Postman, you are connected to the Postman servers and your work is continuously backed up.

* To learn more about how Postman syncs your data, visit [Syncing your work](/docs/getting-started/basics/syncing/).

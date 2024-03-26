---
title: "Enable team discovery in Postman"
updated: 2023-09-25
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman 101 for Admins | Webinar"
    url: "https://youtu.be/d6pw-0Yy5fs"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Get More Out of Postman by Collaborating with Your Team"
    url: "https://blog.postman.com/get-more-out-of-postman-by-collaborating-with-your-team/"

---

Team discovery encourages collaboration by easing the onboarding process for new team members. When team discovery is enabled, users who have a verified email address with your company's domain can request to join your Postman team.

## Contents

* [Enabling team discovery](#enabling-team-discovery)
* [Finding teams within your organization](#finding-teams-within-your-organization)
* [Next steps](#next-steps)

## Enabling team discovery

* Free users: Next to your avatar, select the dropdown list next to **Upgrade > Manage Team**.
* Paid users: Next to your avatar, select **Team > Manage Team**.

In [Team Settings](https://go.postman.co/settings/team/general), select **Team discovery** on the left, then turn on **Enable team discovery**. This will enable anyone from your domain to find and request to join your team.

<img alt="Enable team discovery" src="https://assets.postman.com/postman-docs/v10/team-discovery-enable-v10.15.jpg" width="500px"/>

> Team Admins will receive an email notification when team discovery is enabled and only if the user has verified their email address.

You can optionally add a question for pending team members to answer when they request to join your team. Enter your question and select **Update Question**. Anyone who requests to join the team will be prompted with the question. If you don't specify a question, team members can still add a note when they request to join the team.

All [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) will receive a notification when someone requests to join your team after verifying their email address, including their answer to any question you set, or an optional note.

![Team Request Approval](https://assets.postman.com/postman-docs/v10/admin-team-join-requests-v10.15.jpg)

## Finding teams within your organization

When you first join Postman using an email address with your company's domain, Postman provides you with a list of available teams you can join within your organization. Select **Show More** to see the full list of teams.

![Join a team from your organization](https://assets.postman.com/postman-docs/v10/join-team-discovery-v10.15.jpg)

Select **Join** next to a team. If a Team Admin has set a mandatory question, a window will appear. Answer the question, then select **Submit**.

<img alt="Request to join team" src="https://assets.postman.com/postman-docs/v10/request-to-join-team-team-discovery-v10.15.jpg" width="350px"/>

Once you've verified your account, the Team Admins will receive a notification of your request. When they approve it, you'll be able to access the team and collaborate on API projects within it.

## Next steps

To continue improving your team's onboarding experience, check out [Configuring SSO](/docs/administration/sso/admin-sso/) ([Professional and Enterprise plans only](https://www.postman.com/pricing)) and [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) ([Enterprise plans only](https://www.postman.com/pricing)).

To move forward with collaboration, see [Collaborating in team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/).

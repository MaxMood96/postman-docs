---
title: "Audit logs"
updated: 2022-03-01
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Collaboration and Governance for API Teams | Postman Intergalactic"
    url: "https://youtu.be/4rxpdcGeixs?t=2713"
---

> **[Audit logs are available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

Audit logs display events related to your team, users, and billing. Team Admins can review audit logs to get information about:

* When users were added to, removed from, or invited to your team
* Which user performed a specific action and when they did so

Postman offers audit logs for 90 days to users on Professional plans, and 180 days to users on Enterprise plans.

> Audit logs are visible to all [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) on [Postman Professional and Enterprise teams](https://www.postman.com/pricing), including Super Admins on Enterprise teams.

## Contents

* [Viewing audit logs in the dashboard](#viewing-audit-logs-in-the-dashboard)

* [Exporting audit logs from the dashboard](#exporting-audit-logs-from-the-dashboard)

* [Accessing audit logs with the Postman API](#accessing-audit-logs-with-the-postman-api)

* [Logged events](#logged-events)

## Viewing audit logs in the dashboard

You can view audit logs in Postman by selecting **Team** in the header, then selecting **Audit Logs**.

Audit logs offer information about actions taken by members of your team. Each event includes the user, the user's email address, the event name and a description of the event, the user's IP address, and the date and time of the action, including the user's timezone.

![Audit logs dashboard](https://assets.postman.com/postman-docs/audit-logs-dashboard-v9.jpg)

You can use filters to view actions by date range, event type, and user.

![Filtering the audit log results](https://assets.postman.com/postman-docs/audit-logs-filter-actions-v9.jpg)

## Exporting audit logs from the dashboard

You can export audit logs as CSV files. By default, Postman will export all data in your audit logs from the last seven days. To start the export process, select **Export Audit Logs**.

To specify certain data to export, set the filters you want in the audit logs dashboard and Postman will generate the export using those parameters. To filter your results, select a time range, event, and user, then select **Export Audit Logs**.

You will receive an email with a link to the exported audit logs. The link in the email is active for one hour.

## Accessing audit logs with the Postman API

You can also access audit logs with the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a), allowing you to integrate Postman's audit logs with your security information and event management (SIEM) tools.

Each audit log event has the following attributes:

| <div style="width:100px">Name</div> | Description |
| --- | --- |
| `id` | A numeric value representing the unique identifier of an audit event. |
| `ip` | The IP address of the actor who performed the action. |
| `userAgent` | A string with the user-agent of the actor. |
| `action` | A string with an action or event performed by the actor. |
| `timestamp` | The date and time when the action or event was performed. The time is represented using the ISO 8601 date and time format. |
| `message` | A description of the audit event. |
| `data` | An object that holds the `actor`, `user`, `team`, and `variables` objects. |
| `actor` | An object with information about the actor who performed this action. |
| `user` | An object with information about the user who performed this action. |
| `team` | An object with information about the user's or actor's team. |
| `nextCursor` | A string that represents the cursor of the next page. |

To get started, go to the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) and open the **Audit Logs** folder to view the GET request and example responses.

> You must [generate a Postman API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) to access the [Postman API](/docs/developer/postman-api/intro-api/).

## Logged events

Postman logs events related to your [team](#team-event-examples), [users](#user-event-examples), and [billing](#billing-event-examples). You can find descriptions of each event in the [Audit Logs dashboard](https://go.postman.co/audit). Some examples are listed here.

### Team event examples

| Event | Description |
| ------------- | ------------- |
| Updated Team Name  | `User name` changed your team's name to `team name`. |
| Added Team Member | `User name` joined the team. |
| SCIM provisioning enabled | Postman Internal System enabled SCIM provisioning. |

### User event examples

| Event | Description |
| ------------- | ------------- |
| Added Team Member | `User name` joined the team.  |
| Team Member Removed  | `User name` removed user `User name` (inactive) (id: `id number`, email: `email address` ) from the team.  |
| Sent Team Invite  | `User name` invited `email address` to the team. |

### Billing event examples

| Event | Description |
| ------------- | ------------- |
| Upgraded to Paid Plan | `User name` upgraded your team's plan to Enterprise Essentials. |
| Updated Billing Operation Allow Overages | `User name` enabled the overages for Mock Servers |
| Increased Team Size  | `User name` increased team size by 1. |

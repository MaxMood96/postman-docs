---
title: "Integrate Postman into your development toolchain"
updated: 2023-12-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=iEtsp6o4AJg"
  - type: link
    name: "User Info from the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=k2bvdqxDcsU"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Manage your Postman environments with the Postman API"
    url: "https://blog.postman.com/manage-your-postman-environments-with-the-postman-api/"
  - type: link
    name: "Introducing APIs to Access and Manage Server-Level Responses on a Mock Server"
    url: "https://blog.postman.com/apis-to-access-manage-server-level-responses-mock-server/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman API collection"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation"
  - type: link
    name: "Postman API definition"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/api/72a32ca3-f06a-4e83-a933-2821a0e6616f/definition/d429098b-1789-4c62-b77b-cf02024aba53?view=documentation"
---

The [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) enables you to programmatically manage your Postman assets and integrate Postman into your development toolchain. You can use it to manage collections, environments, monitors, and other Postman elements. You can also access data stored in your Postman account and [combine the Postman API with Newman](/docs/collections/using-newman-cli/continuous-integration/) to integrate Postman with your CI/CD workflow.

You can get started by [forking the Postman API collection](https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a/fork?origin=sidebar) in the Postman Public Workspace. For more details, see the [Postman API documentation](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a). You will also need an [API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) to access the Postman API.

> The Postman API is [rate limited](/docs/developer/postman-api/postman-api-rate-limits/).

## Contents

* [Postman API features](#postman-api-features)
* [APIs for Enterprise or Professional plans](#apis-for-enterprise-or-professional-plans)
* [About v9 and v10 APIs](#about-v9-and-v10-apis)

## Postman API features

The Postman API supports the following Postman features:

* [Workspaces](#workspaces)
* [Collections](#collections)
* [Environments and variables](#environments-and-variables)
* [APIs](#apis)
* [Mock servers](#mock-servers)
* [Monitors](#monitors)
* [User and usage data](#user-and-usage-data)
* [Roles](#roles)
* [Billing](#billing)

> There are more Postman API endpoints available on Postman [Enterprise and Professional plans only](#apis-for-enterprise-or-professional-plans).

### Workspaces

Use the [Workspaces APIs](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-2581bf7a-36b8-4f09-8d2d-dbbaeb0c25bb) to manage your [Postman workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). These endpoints enable you to create temporary workspaces to test, which you can then delete when you're finished. You can also save a backup of another workspace or specific resources (such as collections or APIs) using the Postman API.

### Collections

Use the [Collections APIs](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-c705956d-1005-4fbc-803c-b6b985242a85) to manage your [Postman Collections](/docs/collections/collections-overview/) and simplify collection-related workflows. You can use these endpoints to add, delete, or update your collections. You can also use these endpoints to:

* Update an entire collection or a collection's requests, folders, and responses.
* Transfer collection items between collections or folders.
* Manage your collection forks.

You can also use these endpoints to import an OpenAPI definition to create a collection or transform an existing collection into an OpenAPI definition. This lets you automatically generate a collection from your source code or API definition so you can then automatically sync it with Postman. Any resources that depend on that collection, such as monitors or mock servers, will also see the updated requests and responses.

### Environments and variables

The [Environments API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-74aa54b5-9f5f-4ba5-923f-a6c805c14774) enable you to programmatically manage your [Postman environments](/docs/sending-requests/variables/managing-environments/). You can use this API to manage your [global variables](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-a75846bd-c1c7-43e3-88f6-a0c752db83c5), which scope your work to different environments (such as local development, testing, or production). You can also manage [collection variables](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-24607f03-453e-4936-b544-78d99e05cd19), which are available throughout a collection's requests.

### APIs

> Postman API v9 APIs are [deprecated](#about-v9-and-v10-apis).

Use the Postman [v10 APIs](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-dcbf91c9-f0a6-43c0-adfd-66531b6998a4) to manage your APIs and integrate with your CI/CD systems and automate the publication of new API versions. You can also use it to perform other actions, such as:

* Update or change your API definition.
* Create and publish new versions of your API.
* Manage and sync collections attached to an API.

### Mock servers

In addition to performing CRUD (Create, Read, Update, and Delete) operations on your [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), you can use the [Mocks API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-4c10162c-e6f1-400b-88fa-5c5aac34eb74) to:

* Set a mock server to public or private.
* List all calls received by a mock server.
* Manage mock server responses for 5XX errors.

### Monitors

The [Monitors API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-e8688124-26f9-4dbe-9226-0c453fedf8a9) enables you to programmatically run collections, depending on specific events on your CI/CD pipelines. You can also create and run a [webhook](/docs/collections/running-collections/collection-webhooks/), which is a special monitor that runs a collection.

### User and usage data

The [User API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-c0e35437-9f48-4b8a-a1cc-dcbce8d9d8c6) return information about the API key's owner. You can use it to get data about your API usage and check how many requests you can perform until the end of the month.

### Roles

[Roles](/docs/collaborating-in-postman/roles-and-permissions/) define user permissions within Postman elements, such as workspaces, collections, and APIs. These endpoints enable you to programmatically manage user permissions.

#### Workspace roles

With the [Workspace Roles API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-0ad661ea-2ba2-47f8-929c-044ddaa0ef6a) you can manage user and user group permissions within a specific workspace. You can use these endpoints to help you with onboarding or offboarding, automating role-based workflows, and simplifying compliance and auditing processes by ensuring the right team members have access to sensitive information.

### Billing

The [Billing API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-aa3c5de3-d30b-4082-b4da-5459779b5ba3) enables you to get information about your Postman billing account. You can use these endpoints to help with account and compliance. You can also use these endpoints to integrate with your internal systems, such as [SAP](https://www.sap.com/about/what-is-sap.html).

## APIs for Enterprise or Professional plans

The following APIs are only available for Postman [Enterprise or Professional plan](https://www.postman.com/pricing/) users:

* [Private API Network](#private-api-network)
* [Tags](#tags)
* [Secret Scanner](#secret-scanner)
* [SCIM](#scim)
* [API security and governance](#api-security-and-governance)
* [Audit logs](#audit-logs)

### Private API Network

The [Private API Network API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-b7c02959-88ca-4e2f-9b68-99538eed4533) enables you to programmatically manage your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/private-api-network/adding-private-network/). Use these endpoints to automate the management of your team's internal documentation, integrate it with CI/CD, and ensure that the documentation is always up-to-date. This API also enables you to get all user requests to add elements to the Private API Network and approve or reject them.

### Tags

Use the [Tags APIs](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-7121c1c4-f792-484c-b3bd-c133d58dbbeb) to manage your Postman tags programmatically. You can use these endpoints to add or remove tags from Postman [collections](/docs/collections/using-collections/#tagging-a-collection), [APIs]( /docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [workspaces]( /docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace). You can also use this API to get all Postman elements that match a given tag and then operate on them programmatically.

### Secret Scanner

The [Secret Scanner API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-129b53d2-77f7-4593-89d5-a5a600e9d80f) programmatically provides the same functionality as the [Secret Scanner](/docs/administration/managing-your-team/secret-scanner/) dashboard. These endpoints enable Enterprise Ultimate customers to manage secrets detected by the Postman Secret Scanner. Use it to:

* Search detected secrets (paginated).
* Find the location of a detected secret.
* Update the resolution status of a detected secret.
* Build automatic notification systems.
* Programmatically resolve detected secrets.

### SCIM

The [SCIM API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-842bb61b-7d6f-4ed0-832b-921e1d08fb43) supports [SCIM](/docs/administration/scim-provisioning/scim-provisioning-overview/) (System for Cross-domain Identity Management), which enables you to automate the provisioning of your team. You can deploy Postman at scale across your organization and control access to it with your identity provider. You can use these endpoints to integrate your onboarding process and automatically provision users and groups.

### API security and governance

The [API Security API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-1641318b-f1d5-499b-b295-fc31276f1125) enables you to manage your API’s security by running security checks and tracking your API definition's governance and security rule violations. For example, you can use the [API definition security validation endpoint](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-784ec244-5899-4c69-bab9-c6982e137076) to validate an OpenAPI definition. You can also use it to publish a new version of your API.

### Audit logs

Use the [Audit Logs API](https://www.postman.com/postman/workspace/postman-public-workspace/folder/12959542-d744246b-6939-4602-9559-5614e5f839cf) to monitor and analyze your Professional or Enterprise Postman teams. [Team Admins](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can review audit logs, filter by specific criteria, and get information about:

* When users were added to, removed from, or invited to your team.
* Which user performed a specific action—and when they did so.

## About v9 and v10 APIs

The format for APIs created in Postman changed in Postman v10. The Postman API now supports endpoints for working with APIs created in v10.

The endpoints for working with APIs created in v9 are **deprecated**. You can continue to use these endpoints, but at a future time they will no longer be available. You should start using the [new v10 API endpoints](#new-v10-api-endpoints) as soon as possible.

To view the v9 and v10 endpoints, go to the [public workspace for the Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation) and select the **API > v9** or **API > v10** folder.

### Deprecated v9 API endpoints

The following Postman API endpoints are deprecated. You can continue to use these endpoints, but at a future time they will no longer be available. You should start using the [new v10 API endpoints](#new-v10-api-endpoints) as soon as possible.

* `/apis`
* `/apis/{apiId}`
* `/apis/{apiId}/versions`
* `/apis/{apiId}/versions/{apiVersionId}`
* `/apis/{apiId}/versions/{apiVersionId}/unclassified`
* `/apis/{apiId}/versions/{apiVersionId}/contracttest`
* `/apis/{apiId}/versions/{apiVersionId}/documentation`
* `/apis/{apiId}/versions/{apiVersionId}/environment`
* `/apis/{apiId}/versions/{apiVersionId}/integrationtest`
* `/apis/{apiId}/versions/{apiVersionId}/mock`
* `/apis/{apiId}/versions/{apiVersionId}/monitor`
* `/apis/{apiId}/versions/{apiVersionId}/relations`
* `/apis/{apiId}/versions/{apiVersionId}/schemas`
* `/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}`
* `/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections`
* `/apis/{apiId}/versions/{apiVersionId}/test`
* `/apis/{apiId}/versions/{apiVersionId}/testsuite`
* `/apis/{apiId}/versions/{apiVersionId}/{relationType}/{entityId}/syncWithSchema`

### New v10 API endpoints

To use the new Postman API endpoints, [upgrade your APIs to the v10 format](/docs/designing-and-developing-your-api/creating-an-api/#upgrading-an-api). Make sure to also pass an `Accept` header with the value `application/vnd.api.v10+json`. (Some of the new endpoints appear the same as the deprecated endpoints, but they use the new v10 behavior when you send this `Accept` header.)

* `/apis`
* `/apis/{apiId}`
* `/apis/{apiId}/schemas`
* `/apis/{apiId}/collections`
* `/apis/{apiId}/versions`
* `/apis/{apiId}/tasks/{taskId}`
* `/apis/{apiId}/schemas/{schemaId}`
* `/apis/{apiId}/versions/{versionId}`
* `/apis/{apiId}/schemas/{schemaId}/files`
* `/apis/{apiId}/collections/{collectionId}`
* `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`
* `/apis/{apiId}/collections/{collectionId}/sync-with-schema-tasks`

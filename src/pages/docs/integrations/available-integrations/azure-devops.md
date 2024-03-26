---
title: "Integrate Postman with Azure DevOps"
updated: 2023-10-05
---

> **[Azure DevOps Server (hosted on-premises) integrations are available on Postman Enterprise Ultimate plans.](https://www.postman.com/pricing)**

Postman enables you to sync your Postman APIs to Git repositories hosted in [Microsoft Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?view=azure-devops) with the Postman to Azure DevOps integration.

## API sync with Azure DevOps

With Postman v10, you can connect an Azure DevOps repository to an API in Postman's [API Builder](https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/). Once connected, you can sync your API's definition and associated collections between Postman and Azure DevOps. You can switch branches, pull changes from the repository, and push changes to the repository, all from within Postman. To learn more about syncing your API with Azure DevOps, see [API version control overview](/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/).

> **To connect your API to Azure DevOps, make sure to enable third-party application access for your organization.** If you don't enable third-party access, Postman won't be able to connect to your repository.
>
> In Azure DevOps, go to your [organization settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops), select **Policies**, and turn on the toggle next to **Third-party application access via OAuth**. (Enabling third-party access isn't required for connecting to an Azure DevOps Server repository hosted on-premises.)

---
title: "Integrate Postman with Azure Pipelines"
updated: 2022-10-31
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "A New Postman Integration for Azure DevOps Users"
    url: "https://blog.postman.com/postman-integration-for-azure-devops-users/"

---

[Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) is a continuous integration (CI) and continuous delivery (CD) service that's integrated with Microsoft Azure DevOps. Software development teams can use Azure Pipelines to automatically build, test, and deploy code in Azure DevOps.

To set up an Azure Pipelines integration for your API, first create a pipeline in Azure DevOps and then configure your API in Postman. <!-- repository in a [version control system supported by Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/repos/). Create a pipeline in the repository, and then configure your API in Postman.-->After you set up the integration, you can view the status of builds (pipelines) from within Postman.

> The Azure Pipelines integration isn't available on Azure DevOps Server (hosted on-premises).

## Contents

* [Creating a pipeline in Azure DevOps](#creating-a-pipeline-in-azure-devops)
* [Configuring an Azure Pipelines integration](#configuring-an-azure-pipelines-integration)
* [Viewing build status](#viewing-build-status)
* [Viewing collection run details](#viewing-collection-run-details)
* [Viewing API Governance and API Security rule violations](#viewing-api-governance-and-api-security-rule-violations)
* [Configuring the Postman CLI for Azure Pipelines](#configuring-the-postman-cli-for-azure-pipelines)

## Creating a pipeline in Azure DevOps

<!-- If you haven't already, create a repository for your API in a version control system supported by Azure Pipelines. Then create a pipeline in the repository. To create a pipeline, add a YAML file in your repository. You define your pipeline in this YAML file. To learn more, see [the Azure Pipelines documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-get-started).-->

If you haven't already, create a pipeline in the [Azure Repos Git repository](https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git?view=azure-devops&tabs=yaml) you use for your API. To learn more about Azure Repos, see [the Azure Repos documentation](https://learn.microsoft.com/en-us/azure/devops/repos/?view=azure-devops). To create a pipeline, add a YAML file in your repository. You define your pipeline in this YAML file. To learn more, see [the Azure Pipelines documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-get-started).

## Configuring an Azure Pipelines integration

1. Open your API by selecting **APIs** in the sidebar. *Each API can be linked to one repository*.
1. Select **Test and Automation**.
1. Under **Automate**, select **Azure Pipelines**.
1. You'll be prompted to allow Postman to access your Azure DevOps account. After you grant access, you can close the browser tab and return to Postman.

    > **Make sure to enable third-party application access for your organization.** In Azure DevOps, go to your [organization settings](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/change-application-access-policies?view=azure-devops), select **Policies**, and turn on the toggle next to **Third-party application access via OAuth**.

1. Enter a **Nickname** to help you recognize the integration later. Postman pre-fills a nickname in the format `Azure Pipelines-{API_NAME}`, and you can edit it if you want.
1. Select the Azure DevOps **Organization** with your API repository.
1. Select the Azure **Repository** used for your API.
1. Select **Connect**.

<img alt="Connect to Azure Pipelines" src="https://assets.postman.com/postman-docs/v10/azure-pipelines-connect-repository-2-v10.jpg" width="518px">

## Viewing build status

After you set up an Azure Pipelines integration, information for build jobs (pipeline runs) is available in Postman. For each build you can view the branch, start time, duration, and status (`Succeeded` or `Failed`). You can also view the results of collection runs that are [configured in your pipeline using the Postman CLI](#viewing-collection-run-details).

To view build jobs, open an API and select **Test and Automation**. The most recent jobs are listed under the repository name.

> You can't start Azure Pipelines builds directly in Postman. To start a new build, go to Azure DevOps.

Select **View All Builds** to view the full list of build jobs. From here you can take the following actions:

* Use the dropdown lists to filter jobs by branch or build status.
* To open a build in Azure DevOps, select the build name.
* To get the latest build status information, select <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px"> **Refresh**.
* To edit or delete the integration, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

<img alt="View all Azure Pipelines builds" src="https://assets.postman.com/postman-docs/v10/azure-collection-runs-v10.jpg">

## Viewing collection run details

Using the Postman CLI, you can run Postman collections with your API tests as part of an Azure DevOps pipeline.

To view details for collections that were run as part of a build, first [configure the Postman CLI for Azure Pipelines](#configuring-the-postman-cli-for-azure-pipelines) and then start a new build in Azure DevOps. To learn more about starting builds, see [the Azure Pipelines documentation](https://learn.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops). After the build is complete, use the arrows to expand a build and expand **Collection Runs**. Then expand a collection to view details about a collection run.

> Select **View Report** to view a collection run report in the Postman **History**. Learn more about using the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/).

## Viewing API Governance and API Security rule violations

Using the Postman CLI, you can enforce [API Governance and API Security rules each time the pipeline runs](/docs/api-governance/api-definition/api-definition-warnings/#tracking-governance-and-security-rule-violations-in-cicd) using the [`api lint` command](/docs/postman-cli/postman-cli-options/#governance-and-security) ([Enterprise teams only](https://www.postman.com/pricing/)).

To view the results of API Governance and API Security checks that ran as part of the build, first [configure the Postman CLI for Azure Pipelines](#configuring-the-postman-cli-for-azure-pipelines) and then start a new build on Azure DevOps. After the build is complete, use the arrows to expand a build and expand an API definition to view any rule violations.

<img alt="View API Governance and API Security results" src="https://assets.postman.com/postman-docs/v10/azure-api-governance-and-security-results-v10.jpg">

## Configuring the Postman CLI for Azure Pipelines

With the help of the Postman CLI and the Postman API, you can run Postman collections with your API tests as part of your Azure DevOps pipeline. First generate the Postman CLI configuration code in Postman. Then add the configuration code to the YAML file in your Azure Repos repository.

Each time the pipeline runs, the Postman CLI runs the collections that contain your tests. You can view the results of your tests in Postman.

> Before you begin, make sure you’ve already [set up an integration](#configuring-an-azure-pipelines-integration) between your API and Azure Pipelines.

To generate configuration code for the Postman CLI, do the following:

1. Open your API and select **Test and Automation**.
1. Under the repository name, select **View All Builds**.
1. Select **Configure Postman CLI**.
1. Select a **Collection** to run during pipeline builds. To be available in the list, you must first [add the collection as a test suite](/docs/designing-and-developing-your-api/testing-an-api/#adding-tests) to your API. You can also select an **Environment** to use.
1. (Optional) Select the checkbox to enforce API Governance and API Security rules each time the CI/CD pipeline runs ([Enterprise teams only](https://www.postman.com/pricing/)).
1. Select the **Operating system** for your CI/CD pipeline.
1. Select **Copy Postman CLI Command** to copy the Postman CLI configuration.

<img alt="Generate the Postman CLI configuration" src="https://assets.postman.com/postman-docs/v10/generate-postman-cli-v10-3.jpg" />

To add the Postman CLI configuration to your Azure DevOps pipeline, do the following:

1. Create a new YAML file in your Azure Repos repository, and then edit the file.
1. Add the Postman CLI configuration you copied from Postman to the YAML file:
    * Replace all instances of `$(POSTMAN_API_KEY)` with a valid [Postman API Key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key).
    > Postman recommends that you store your Postman API key as a secret variable in Azure Pipelines to keep it secure. To learn more about secret variables, see [the Azure Pipelines documentation](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/set-secret-variables?view=azure-devops&tabs=yaml%2Cbash).
1. Commit and push the changes to your remote repository. This will automatically start a build in Azure DevOps.
1. To view the test results in Postman, open your API and select **Test and Automation**. Learn more about [Viewing collection run details](#viewing-collection-run-details).

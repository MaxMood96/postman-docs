---
title: "Get started with Postman Insights"
updated: 2024-03-07
early_access: true
plan: alpha
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Postman Live Insights: Faster, Better API Debugging"
    url: "https://blog.postman.com/introducing-postman-live-insights-faster-better-api-debugging/"
  - type: link
    name: "Postman Live Insights: automatically discover, monitor, and add APIs"
    url: "https://www.postman.com/product/live-insights/"
---

The Postman Insights Agent supports Amazon Elastic Container Service (ECS) on EC2 and ECS Fargate deployments. To get started using Insights, ensure you have a team workspace set up in Postman. If you don't already have a team in Postman, see [Creating a team](/docs/collaborating-in-postman/working-with-your-team/team-collaboration/#creating-a-team) for instructions on how to set it up. The Postman Free plan provides team setup with up to three users.

Once your team workspace is set up, contact the [Insights Alpha team](mailto:live.insights.alpha@postman.com) to get access to the Insights alpha in Postman.

## Contents

* [Install the Postman Insights Agent](#install-the-postman-insights-agent)
* [Configure the Postman Insights Agent](#configure-the-postman-insights-agent)
    * [Requirements](#requirements)
    * [Configure the Insights Agent as a sidecar](#configure-the-insights-agent-as-a-sidecar)
    * [Configure the Insights Agent as a daemon service](#configure-the-insights-agent-as-a-daemon-service)
    * [Uninstall the Insights Agent](#uninstall-the-insights-agent)
    * [Ensure internet access](#ensure-internet-access)
    * [Set up AWS ECS permissions](#set-up-aws-ecs-permissions)
* [Check your Insights Agent connection](#check-your-insights-agent-connection)
* [Curate your endpoints](#curate-your-endpoints)
* [Observe Insights](#observe-insights)

## Install the Postman Insights Agent

The Insights Agent listens to the traffic arriving at the cluster service you want to monitor and creates an _Insights Project_ for it.

1. In Postman, open **Workspace Overview**, select the **Settings** tab, and then activate the Insights element.

    <img alt="Add Insights element" src="https://assets.postman.com/postman-docs/v11/insights-add-element-v11.jpg" width="347px">

1. Select **Insights** in the sidebar and select **+** to create a new Insights Project.

    <img alt="Create an Insights Project" src="https://assets.postman.com/postman-docs/v11/insights-add-project-v11.jpg" width="323px">

    The onboarding instructions display, listing the configuration requirements.

1. Review the instructions and select **I'm Ready**.
1. Copy the install script from the onboarding instructions and run it in your shell:

    ```bash
    bash -c "$(curl -L https://releases.observability.postman.com/scripts/install-postman-insights-agent.sh)"
    ```

## Configure the Postman Insights Agent

* If you’re using Fargate, you can [configure the Insights Agent as a sidecar](#configure-the-insights-agent-as-a-sidecar) only.
* If you’re using ECS on EC2 with awsvpc, you can install it as a [sidecar](#configure-the-insights-agent-as-a-sidecar) or as a [daemon service](#configure-the-insights-agent-as-a-daemon-service).
* If you’re using ECS on EC2 with bridge networking, you can [configure the Insights Agent as a daemon service](#configure-the-insights-agent-as-a-daemon-service) only.

### Requirements

Configuring ECS requires:

* Internet access for your service, to be able to communicate with the Insights backend services. For more information, see [Ensure internet access](#ensure-internet-access).
* AWS credentials at `~/.aws/credentials` with edit access to ECS cluster, service and task definition. For more information, see [Set up AWS ECS permissions](#set-up-aws-ecs-permissions).
* Cluster ARN. Navigate to the cluster in the AWS console and find the ARN in the cluster overview.
* Service ARN. The ARN of the service on which you want to install the Postman Insights Agent.

### Configure the Insights Agent as a sidecar

Following are instructions for installing the Insights Agent as a sidecar container.

> If you're using ECS on EC2 with bridge networking, you will need to attach the Insights Agent to the host network. See [Configure the Insights Agent as a daemon service](#configure-the-insights-agent-as-a-daemon-service).

1. Prepare to run the install script. Check [Requirements](#requirements) for needed information.

1. In the **New insights** page, select **Add API Key** to generate or use an API key.

1. Copy the script and run it in your shell, substituting your values. The script on the page should have your API key and project ID filled in for you.

    ```bash
    POSTMAN_API_KEY=<your_api_key> postman-insights-agent ecs add \
    --project <projectID> \
    --cluster <ECS_cluster_ARN> \
    --profile <aws_profile_name> \
    --region <aws_region> \
    --service <ECS_service_ARN> \
    --task <task-name>
    ```

    Observe the deployment progress.

    ![ECS sidecar configuration](https://assets.postman.com/postman-docs/v11/insights-sidecar-shell-v11.jpg)

    See the help menu for further configuration.

    ```bash
    postman-lc-agent ecs --help
    ```

    > The time it takes for the deployment to complete depends on the number of tasks running in a service. Therefore, while the process might take a while, the CLI will run until the deployment is finished because the processing is handled by AWS.

1. Return to Postman and observe an Insights Project populated for your services.

    > Your Insights Project can take a few minutes to populate.

You are ready to [check your Insights Agent connection](#check-your-insights-agent-connection), [curate your endpoints](#curate-your-endpoints), and [observe insights](#observe-insights) about your endpoints. You can also [review any traffic errors](/docs/insights/insights-troubleshoot/).

### Configure the Insights Agent as a daemon service

Following are instructions for attaching the Insights Agent to the host network in ECS. This option is necessary if you use ECS with bridge networking. If you’d like to install the Insights Agent as a sidecar instead, see [Configure the Insights Agent as a sidecar](#configure-the-insights-agent-as-a-daemon-service).

1. Check [Requirements](#requirements) for needed information. In the **Amazon EC2 console > Resource Groups & Tag Editor**, create a new task definition with **Network mode** set to `host`.

    **Example:** .5 vCPU and .5 MB memory for the agent, and the default task execution role.

    ![ECS daemon task configuration](https://assets.postman.com/postman-docs/v11/insights-agent-daemon-task-v11.jpg)

1. Add a single container in this task definition, running `docker.postman.com/postman-insights-agent`. Delete the port mapping. The Insights Agent doesn't need to expose any services to your network. Add the `POSTMAN_API_KEY` environment variable with your Postman API key set as the value.

    ![ECS daemon container configuration](https://assets.postman.com/postman-docs/v11/insights-agent-daemon-container-v11-1.jpg)

1. Configure logging (optional), then expand the **Docker configuration** section.

    Replace the entry point with this string, followed by your collection ID: `/postman-insights-agent,apidump,--project,`.

    ![ECS daemon logging configuration](https://assets.postman.com/postman-docs/v11/insights-agent-daemon-logging-v11-1.jpg)

    If you use a particular port number per service, you can specify additional arguments to only capture traffic destined for port `NNNN`: `...,--filter,port NNNN`.

    Or you can use the extra argument to filter by the hostname you use to access the service: `...,--host-allow,HOSTNAME`.

    This parameter can take multiple comma-separated regular expressions if the task is more complicated than a single host.

1. Create a service that runs this task. You can run it as a typical service you can then scale up or down. Alternatively, you can run it as a _daemon_ on every EC2 instance in the cluster.

    Create the task. Switch the **Compute options** to _Launch Type_ and select _EC2_.

    <img alt="ECS daemon service creation" src="https://assets.postman.com/postman-docs/v11/insights-agent-daemon-service-v11-4.jpg" width="365px">

1. For **Application type** select _Service_, then select the task definition you created in steps 1–3. For **Service type** select _Daemon_.

    <img alt="ECS daemon deployment configuration" src="https://assets.postman.com/postman-docs/v11/insights-agent-daemon-deployment-v11.jpg">

1. Return to Postman and observe the endpoints in your Insights Project.

    > Your Insights Project can take a few minutes to populate.

You are ready to [check your Insights Agent connection](#check-your-insights-agent-connection), [curate your endpoints](#curate-your-endpoints), and [observe insights](#observe-insights) about your endpoints. You can also [review any traffic errors](/docs/insights/insights-troubleshoot/).

### Uninstall the Insights Agent

The Insights Agent installation modifies the task definition of your service to include the Insights Agent sidecar. To uninstall the Insights Agent, simply revert to the previous version of your task definition. To completely uninstall the agent, you can delete the task definition that contains the Insights Agent sidecar.

### Ensure internet access

#### Fargate tasks

To verify that your task has a route to the internet:

* When using a public subnet, you can assign a public IP address to the task ENI.
* When using a private subnet, the subnet can have a NAT gateway attached.

For more information, see [Task networking for tasks hosted on Fargate](https://docs.aws.amazon.com/AmazonECS/latest/userguide/fargate-task-networking.html).

#### EC2 tasks

Tasks must be launched in private subnets with NAT gateway. For more information, see [Task networking for tasks that are hosted on Amazon EC2 instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html).

### Set up AWS ECS permissions

Attach the following policy to your AWS profile.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:UpdateService",
                "ecs:RegisterTaskDefinition",
                "ecs:DescribeServices",
                "ecs:TagResource",
                "ecs:DescribeTaskDefinition",
                "ecs:DescribeClusters"
                ],
            "Resource": "*"
        }
    ]
}
```

The Postman Insights Agent CLI needs the following permissions in order to install the Insights Agent in ECS. If the profile you selected lacks any of these permissions, the CLI output will show an error message indicating which action it was attempting to perform.

The `AmazonECS_FullAccess` policy provided by Amazon is a superset of these actions; you could add that entire policy as an easy way to ensure your permissions are sufficient, if they're not already.

| Action                           | Resource                                                                     | Purpose                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `ec2:DescribeRegions`            | \*                                                                           | Find the list of AWS regions you have enabled. (If not present, it defaults to a precompiled list.) |
| `ecs:ListClusters`               | \*                                                                           | Find the available ECS clusters.                                                                    |
| `ecs:DescribeClusters`           | \*, or restricted to account like `arn:aws:ecs:::cluster/*`          | Look up the names of the available ECS clusters.                                                    |
| `ecs:ListTaskDefinitionFamilies` | \*                                                                           | Find the available task definitions.                                                                |
| `ecs:DescribeTaskDefinition`     | \*                                                                           | Read the existing task definition in order to copy it.                                              |
| `ecs:RegisterTaskDefinition`     | \*                                                                           | Write a new version of the task definition.                                                         |
| `ecs:ListServices`               | \*                                                                           | Find the available services.                                                                        |
| `ecs:DescribeServices`           | \*, or restricted to your account, or restricted to the cluster you selected | Identify which services are using the task definition you selected.                                 |
| `ecs:UpdateService`              | \*, or restricted to your account, or restricted to the cluster you selected | Update and restart the service using the new task definition.                                       |
| `ecs:TagResource`                | \*, or restricted to your account, or restricted to the cluster you selected | Mark the service as having been updated by the Insights Agent.                                               |

## Check your Insights Agent connection

The Insights Project shows you the properties of your system based on real-time API traffic. For [Postman Insights](#observe-insights) to work, the Postman Insights Agent needs to see your API traffic.

You can observe traffic error states and messages in the Insights Project’s **Diagnostics** tab.

<img alt="Insights Diagnostics error" src="https://assets.postman.com/postman-docs/v11/insights-diagnostics-error-v11.jpg">

## Curate your endpoints

The Postman Insights Agent watches your API traffic to automatically populate your endpoints inside your Insights Project. Then, you can do the following:

1. See all endpoints, with summary information about each. You can search, sort, and filter the endpoints. Filter endpoints by host, method, category, or status code.

    <img alt="Insights endpoints" src="https://assets.postman.com/postman-docs/v11/insights-endpoints-v11.jpg">

1. Find endpoints that you would like to monitor and add them to a curated collection. For example, select all health and metrics endpoints and select **Save to Collection**.

    <img alt="Insights curation" src="https://assets.postman.com/postman-docs/v11/insights-curation-v11.jpg">

1. Choose to add the selected endpoints to an existing curated collection or create a new collection. Select **Add**.

1. Access your curated collection and check the Insights and Errors tabs for the selected endpoints. See [Observe Insights](#observe-insights) for more information.

Just like with the ordinary collections in Postman, an Insights collection has these elements:

* Query parameters — Sent with your requests using the URL box and the **Params** tab.
* Path variables — Form part of the request URL, and are referenced using placeholders preceded by `:` as in this example: `/customer/:id`.
* Headers — Provide more metadata about the operation you are performing.
* Body — Enables you to specify the data you need to send with a request.
* Response — Gives you several tools to help you understand the response quickly. You can view the body in one of four views: Pretty, Raw, Preview, and Visualize.

For more information, see [Send API requests and get response data in Postman](/docs/sending-requests/requests/).

## Observe Insights

A curated collection provides **Insights** and **Errors** tabs where you can observe endpoint error trends, enabling you to catch errors before your users do.

> This feature is experimental and will continue to evolve. Send your feedback and ideas about the types of metrics you would like to see to the [Insights Alpha team](mailto:live.insights.alpha@postman.com).

The **Insights** tab returns a list of error categories for endpoints, selectable from a dropdown list:

* Endpoints with most errors in the past week, based on the HTTP status code of the response.
* Endpoints with the highest proportion of requests that resulted in an error in the past week, based on the HTTP status code of the response.
* Endpoints with new errors in the past day for endpoints that were previously error free for 6 days, based on the HTTP status code of the response.
* Endpoints with the highest p90 latency in the past week.

<img alt="Insights tab" src="https://assets.postman.com/postman-docs/v11/insights-collection-insights-v11.jpg">

The **Errors** tab displays per-endpoint error states in a chronological order as well as a graphical representation of the seven-day trend.

<img alt="Errors tab" src="https://assets.postman.com/postman-docs/v11/insights-collection-errors-v11.jpg">

## Next steps

* [About Postman Insights Early Access](/docs/insights/insights-early-access/)
* [Postman Insights overview](/docs/insights/insights-overview/)
* [Diagnose and troubleshoot errors](/docs/insights/insights-troubleshoot/)
* [Postman Insights Agent reference](/docs/insights/insights-reference/)

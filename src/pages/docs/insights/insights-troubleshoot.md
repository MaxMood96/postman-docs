---
title: "Diagnose and troubleshoot errors"
updated: 2024-04-08
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

As you work with the Postman Insights Agent, you may encounter errors and receive error messages. You may also come across frequently encountered issues. You'll find [solutions](#frequently-asked-questions) to some of these issues below.

## Contents

* [Error messages](#error-messages)
* [ECS memory issues troubleshooting](#ecs-memory-issues-troubleshooting)
    * [Out of memory](#out-of-memory)
    * [Container size is too large](#container-size-is-too-large)
* [Frequently asked questions](#frequently-asked-questions)
    * [Why isn't my API traffic showing up?](#why-isnt-my-api-traffic-showing-up)
    * [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted)
    * [What does the Insights Agent do with sensitive data?](#what-does-the-insights-agent-do-with-sensitive-data)
    * [I can't update my Insights Project.](#i-cant-update-my-insights-project)
    * [I'm not seeing the traffic I'm looking for in my API model.](#im-not-seeing-the-traffic-im-looking-for-in-my-api-model)
    * [My API model is mostly health checks and infrastructure endpoints.](#my-api-model-is-mostly-health-checks-and-infrastructure-endpoints)

## Error messages

The Insights Agent displays errors and provides diagnostics so that you can act on them:

* Observe information received from the Insights Agent on usage and error states, including interfaces, ports, and traffic (for example, HTTP vs. encrypted traffic, the busiest endpoints, and so on).
* Review status messages and act on them.

## ECS memory issues troubleshooting

The Postman Insights Agent needs at least 300 MB of memory to run. If you’ve used most memory available, you need to make adjustments. Consider specifying an upper limit.

For more information, see [How Amazon ECS manages CPU and memory resources](https://aws.amazon.com/blogs/containers/how-amazon-ecs-manages-cpu-and-memory-resources/).

### Out of memory

If you have specified a task-level memory limit (which is required for ECS Fargate, but optional for ECS on EC2 instance) then the CLI `ecs add` command doesn't specify a memory size for the Insights Agent. This means it shares memory with other containers in the task.

If the instance runs out of memory, one of the containers may stop operating. If you see instances restarting after an `OutOfMemory` outage, you may wish to either increase the hard limit for the task, or impose a hard limit on the agent. If you're performing the latter, set the **Memory hard limit** value in the container definition to at least 700 MB.

For more information about debugging, see [How do I troubleshoot OutOfMemory errors in Amazon ECS?](https://repost.aws/knowledge-center/ecs-resolve-outofmemory-errors).

### Container size is too large

If you don't specify a task-level memory limit, then the CLI `ecs add` command sets a container-level memory request of 300 MB. This means that your task requires an additional 300 MB of memory to be scheduled on an instance.

If you use a Docker Compose file to create your ECS task or service, then if no memory limit is specified, the Insights Agent sidecar is allocated 512 MB by default.

If you've already tuned the other containers in your task definition based on the instance size used in your cluster, the total size of the base container and the sidecar may be too large to schedule, resulting in the following message:

```bash
INFO[0006] (service mgg-test) was unable to place a task because no container instance met all of its requirements. The closest matching (container-instance 79cac21ecdb44097a989744944e202d7) has insufficient memory available. For more information, see the Troubleshooting section of the Amazon ECS Developer Guide. timestamp="2023-12-18 23:31:31 +0000 UTC"
```

![Insufficient memory](https://assets.postman.com/postman-docs/v10/live-insights-insufficient-memory-v10-21.jpg)

In this case, you may need to reduce the memory or `memoryReservation` parameters on other containers in the task by the 300 MB (or 512 MB) requested by the Insights Agent.

## Frequently asked questions

The following topics can help you get traffic in the right state and get API models to show the information you need.

* [Why isn't my API traffic showing up?](#why-isnt-my-api-traffic-showing-up)

* [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted)

* [What does the Insights Agent do with sensitive data?](#what-does-the-insights-agent-do-with-sensitive-data)

* [I can’t update my Insights Project.](#i-cant-update-my-insights-project)

* [I'm not seeing the traffic I'm looking for in my API model.](#im-not-seeing-the-traffic-im-looking-for-in-my-api-model)

* [My API model is mostly health checks and infrastructure endpoints.](#my-api-model-is-mostly-health-checks-and-infrastructure-endpoints)

### Why isn't my API traffic showing up?

You've set up the Insights Agent, and you've been running API traffic across the network, but your API model page is either empty or shows random endpoints you don't care about.

Here are a few things that may be going on:

* Permission issues that prevent the Insights Agent from seeing traffic.
* Encrypted traffic. See [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted) for solutions.
* Data formats that the Insights Agent doesn't recognize.
* ECS on EC2 with bridge networking. You can install Insights Agent as a daemon service only. For instructions, see the [installation instructions](/docs/insights/insights-gs/#configure-the-insights-agent-as-a-daemon-service).

In many of these cases, there is a solution. Currently, the Insights Agent doesn't support these three cases:

* Encrypted traffic.
* gRPC/GraphQL.
* PaaS platforms where the Insights Agent can't easily access the network traffic through packet capture. Known platforms in this category are Heroku and Render.

If you experienced one of these cases, contact the [Insights Alpha team](mailto:live.insights.alpha@postman.com) so work in this area can be prioritized.

Postman provides more information about how to debug what's going on:

* Diagnostic information in the CLI itself
* Information about encrypted traffic and errors in Postman

#### Check your CLI output

If your traffic is getting jammed up in a way that the Insights Agent recognizes, your CLI shows error output describing what's gone wrong. If you would like help resolving your issues, email your log output to [Support](mailto:live.insights.alpha@postman.com).

#### Check the Insights Project diagnostics

Issues with traffic processing appear in the Insights Project's **Diagnostics** tab.

### What do I do if my traffic is encrypted?

If your model is missing endpoints that you expect to be there, or is completely empty, it may be because you are trying to observe your API at a point where it's encrypted. In Postman, navigate to the Insights Project's **Diagnostics** tab and review the client reports listed there. Check to see whether the Insights Agent detected any traffic encrypted with TLS.

#### Add a reverse proxy

If HTTPS currently terminates at your application, then the Insights Agent won't be able to see the unencrypted version of your data. You could reconfigure your deployment to let the Insights Agent see the unencrypted data by adding a reverse proxy to serve as the HTTPS endpoint.

See [NGINX Reverse Proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) for instructions on setting up NGINX, a popular open-source web server, as a reverse proxy. This reverse proxy can be set up as part of your container image, or run as a sidecar.

When configured with your certificate, the reverse proxy accepts the HTTPS connection from clients, decrypt the data, and then send the unencrypted data to your application. The unencrypted data can be observed by the Insights Agent on the local network. The easiest way to get started with this configuration is to have both NGINX and the Insights Agent configured as sidecars in your application container.

#### Use HTTP from the load balancer instead of HTTPS

If you are using a load balancer, and your security policy permits it, you could have the load balancer terminate HTTPS, and communicate to the application using unencrypted HTTP. Amazon’s Application Load Balancer supports using either HTTP or HTTPS as a target, but only HTTP will be visible to the Insights Agent.

### What does the Insights Agent do with sensitive data?

The Insights Agent obfuscates request/response payload data and sends only request/response metadata to our servers.

The Insights Agent sends salted hashes of request/response payload data. The Postman cloud isn't able to access this information, so the Postman cloud never accesses your sensitive data.

### I can’t update my Insights Project.

You may come across the following error message when you attempt to update your Insights Project.

```shell
[ERROR] You cannot send traffic to the to the service with ID svc_01234AaBbCcDd. Ensure that your collection ID is correct and that you have edit permissions on the collection. If you do not have edit permissions, please contact the workspace administrator to add you as a collection editor.
```

This issue can occur if you:

* Don’t have the right project ID. To locate the project ID, select your Insights Project and then select the **Diagnostics** tab. The project ID is the alphanumeric string that begins with `svc_`.

  ![Get the project ID](https://assets.postman.com/postman-docs/v11/insights-projectID-v11.jpg)

* Don’t have the required permission. Please contact your Workspace Admin for access.

### I'm not seeing the traffic I'm looking for in my API model.

If you're not seeing the endpoints you're expecting in your first Insights Project, there may be a few reasons, many of them addressable.

* Few of the endpoints you care about are getting through because they're health checks or infrastructure endpoints. What could be happening is that the Insights Agent is seeing mostly health checks and infrastructure endpoints, and your other traffic isn't getting through. If that's the case, see [My API model is mostly health checks and infrastructure endpoints](#my-api-model-is-mostly-health-checks-and-infrastructure-endpoints) for help.
* Few of the endpoints you care about are getting through because they're encrypted. If this is the case, see [What do I do if my traffic is encrypted?](#what-do-i-do-if-my-traffic-is-encrypted) for workarounds.
* Your model is cluttered with other endpoints that you don't want to see, but that you would like to filter out. If this is the case, try filtering out the endpoints.

### My API model is mostly health checks and infrastructure endpoints.

You may have been able to successfully generate an API model, but most of what you're seeing is health checks.

Load balancers and orchestration systems often use a health endpoint to verify whether a service is live. Similarly, there are AWS endpoints your system may call as part of its regular functioning.

Because these endpoints get called regularly, regardless of whether there is other traffic, the health endpoints could clog up your API model.

Because the Insights Agent samples your traffic, meaning it doesn't send all of your traffic to Postman, health check and infrastructure endpoints could come to dominate the traffic that the Insights Agent sees. The Insights Agent's rate limiting (which defaults to 1000 calls per minute) may cause some API calls to be dropped, so filtering out the health endpoints ensures that this budget is used entirely for important endpoints.

If this is the case, the solution is to set up filters on the Insights Agent. This will increase the Insights Agent's ability to capture meaningful (non-health check) data.

#### Filter out endpoints by path

One way to filter out traffic is using the `--path-exclusions` flag.

To remove a health check endpoint, for instance, use the `--path-exclusions` command line parameter with `apidump`, specifying the path part of the health check. For example,

```shell
apidump --project <projectID> –-path-exclusions ^/health$
```

causes all the `/health` endpoints on all hosts to be ignored by the Insights Agent.

The argument to `--path-exclusions` is a Go regular expression, which may match anywhere within the path. The special characters `^` and `$` signal _start of string_ and _end of string_; this prevents the filter from matching other paths that include the string `/health`, like `/employee/health-benefits`.

#### Filter out endpoints by IP address

A similar problem can arise when your model is littered with API calls to unnamed infrastructure services accessed by IP address. To remove these from your model, you can use a regular expression in the `--host-exclusions` command line parameter, as follows:

```shell
apidump --project <projectID> –-host-exclusions ^(\d)+\.(\d)+\.(\d)+\.(\d)+$
```

This removes all endpoints whose host is given by a dotted-quad IP address.

## Next steps

* [About Postman Insights Early Access](/docs/insights/insights-early-access/)
* [Postman Insights overview](/docs/insights/insights-overview/)
* [Get started with Postman Insights](/docs/insights/insights-gs/)
* [Postman Insights Agent reference](/docs/insights/insights-reference/)

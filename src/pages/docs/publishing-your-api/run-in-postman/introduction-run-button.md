---
title: "Share collections with Run in Postman buttons"
updated: 2024-01-10
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Generate a Run in Postman Button | Postman Level Up"
    url: "https://youtu.be/r2DGy4jSuUE"
  - type: link
    name: "WTD: Postman for API development and docs"
    url: "https://podcast.writethedocs.org/2018/01/22/postman-for-api-docs-write-the-docs/"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "How to Dynamically Create Custom Environments with Code"
    url: "https://blog.postman.com/how-to-dynamically-create-custom-environments-with-code/"
  - type: link
    name: "Link Your Docs to a Public Workspace for a Better Developer Experience"
    url: "https://blog.postman.com/link-docs-to-public-workspace-for-better-developer-experience/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Twitter uses Run in Postman buttons to automate importing"
    url:  "https://www.postman.com/case-studies/twitter/"
  - type: link
    name: "Box's Run In Postman button loads collection into its app"
    url:  "https://www.postman.com/case-studies/box/"
---

The **Run in Postman** button <img alt="Run in Postman button" src="https://assets.postman.com/postman-docs/run-in-postman-button-icon.jpg#icon" width="100px"/> enables you to share your Postman Collection with other users. The button creates a [fork](/docs/collaborating-in-postman/using-version-control/forking-elements/) of the collection, which lets users stay updated with any changes to your collection and provides consumers with its most recent version. You can also attach an environment to your **Run in Postman** button to help onboard new users to your API quickly and efficiently.

You can get started by [creating a **Run in Postman** button](/docs/publishing-your-api/run-in-postman/creating-run-button/) for your collection or [integrate the button](/docs/publishing-your-api/run-in-postman/run-button-API/) in your API documentation or developer portal.

> Don't leak sensitive data like access keys in your collection or environment. Read more about [securely using API keys in Postman](https://blog.postman.com/how-to-use-api-keys/).

## User interaction with your button

When a user comes across the **Run in Postman** button <img alt="Run in Postman button" src="https://assets.postman.com/postman-docs/run-in-postman-button-icon.jpg#icon" width="100px"/> in your collection they can choose to fork the collection to their workspace, view the collection in the public workspace, or import the collection into Postman. Then, they can begin interacting with your API. The **Run in Postman** button allows the consumers to fork your collection, which creates a copy of the collection while maintaining a link to the parent.

<img alt="Fork collection for run in postman" src="https://assets.postman.com/postman-docs/fork-collection-for-run-in-postman.jpg" height="350px"/>

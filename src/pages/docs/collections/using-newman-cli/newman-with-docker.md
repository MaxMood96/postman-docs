---
title: "Run Newman with Docker on macOS, Ubuntu, and Windows"
updated: 2023-09-26
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Testing and Deploying APIs with Docker and Postman"
    url: "https://www.youtube.com/live/AB78LyHtmHU?feature=share"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Integrations: how Postman plays with some of your favorite tools"
    url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
---

[Docker](https://www.docker.com/) is a platform for building and running applications in a virtual environment. You can use [Newman](https://github.com/postmanlabs/newman) to run your collections in a Docker container.

## Contents

* [Using Newman with Docker on macOS and Ubuntu](#using-newman-with-docker-on-macos-and-ubuntu)
* [Using Newman with Docker on Windows](#using-newman-with-docker-on-windows)
* [Next steps](#next-steps)

## Using Newman with Docker on macOS and Ubuntu

To use Newman with Docker for macOS or Ubuntu, do the following:

1. Make sure Docker is installed and running on your system. Go to [Get Docker](https://docs.docker.com/get-docker/), choose your operating system, and follow the instructions.

1. To test your Docker installation, run the following command:

    ```bash
    $ docker run hello-world
    ```

1. Pull the [Newman Docker](https://hub.docker.com/r/postman/newman/) image from Docker hub:

    ```bash
    $ docker pull postman/newman;
    ```

1. Run Newman commands on the image. For example, to run a [collection](/docs/sending-requests/create-requests/intro-to-collections/), use the collection ID and your Postman API key:

    * To get the collection ID, select a collection in the sidebar. Select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> and copy the ID.

    * To get an API key, go to [Generate a Postman API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key).

    ```bash
    $ docker run -t postman/newman run "https://api.getpostman.com/collections/<collection-id>?apikey=<your-api-key>"
    ```

The collection runs in Newman and the output displays in the terminal.

The entry point to the Docker image is Newman, so you can use all Newman command line parameters. You can also run locally stored collection files. The [Newman Docker documentation](https://hub.docker.com/r/postman/newman/) describes how to mount shared data volumes.

## Using Newman with Docker on Windows

To learn more about using Newman with Docker on Windows, go to [how to run Newman in Docker for Windows](https://blog.postman.com/using-the-newman-docker-image-in-windows/).

## Next steps

For more information on collection runs, see:

* [Using the Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/)
* [Importing data files](/docs/collections/running-collections/working-with-data-files/)
* [Building request workflows](/docs/collections/running-collections/building-workflows/)
* [Integrating with Jenkins](/docs/collections/using-newman-cli/integration-with-jenkins/)
* [Integrating with Travis CI](/docs/collections/using-newman-cli/integration-with-travis/)

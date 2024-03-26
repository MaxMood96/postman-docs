---
title: "Install and update Postman"
updated: 2023-10-27
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Unboxing What’s New in Postman v10 | Postman Intergalactic"
    url:  "https://youtu.be/LmEl7rHYhxU"
  - type: link
    name: "Agent for the Postman Web Client | Postman Level Up"
    url:  "https://www.youtube.com/watch?v=6xlJUx2ZMy4&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=3"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Announcing Postman v10: The API Platform for an API-First World"
    url: "https://blog.postman.com/announcing-postman-v10/"
  - type: link
    name: "Introducing the Postman Agent: Send API Requests from Your Browser without Limits"
    url: "https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/"
---

To get the latest version of the Postman desktop app, visit the [Download Postman page](https://www.postman.com/downloads/) and select the option for your operating system. Postman is available as a native desktop app for macOS (Intel or Apple silicon), Windows (Intel 32-bit or 64-bit), and Linux (64-bit).

Postman is also available as a web app at [go.postman.co/home](https://go.postman.co/home). You can use the Postman web app to carry out many of your API development and testing tasks in your web browser. Keep in mind that some features aren't supported when using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#web-limitations), so use the Postman desktop app for the full Postman experience.

## Contents

* Install Postman on the desktop
    * [Windows](#install-postman-on-windows)
    * [Mac](#install-postman-on-mac)
    * [Linux](#install-postman-on-linux)
* [Use the Postman web app](#use-the-postman-web-app)
    * [Browser requirements](#browser-requirements)
    * [Install the Postman Desktop Agent](#install-the-postman-desktop-agent)
    * [Web limitations](#web-limitations)
* [Use the Postman VS Code extension](#use-the-postman-vs-code-extension)
* [Update Postman](#update-postman)
* [Use Postman behind a firewall](#use-postman-behind-a-firewall)
* [Troubleshoot your Postman installation](#troubleshoot-your-postman-installation)
    * [Update failed error](#update-failed-error)
    * [Update not available](#update-not-available)

## Install Postman on Windows

Postman is available for Windows 7 and later.

1. [Download](https://www.postman.com/downloads/) the latest Postman version.
1. Select and run the `.exe` file to install Postman.

> Postman v9.4 is the last version of Postman that supports both 32-bit and 64-bit Windows. All versions of Postman following v9.4 require 64-bit x86 Windows. You can continue to use Postman v9.4 and earlier on 32-bit Windows.

## Install Postman on Mac

Postman is available for macOS 10.13 (High Sierra) and later.

1. [Download](https://www.postman.com/downloads/) the latest Postman version.

    > Make sure to download the **Mac Apple Chip** version if you have a Mac with an Apple silicon processor.

1. If your browser downloads the file as a ZIP file, find the file in the **Downloads** folder and unzip it.
1. In the **Downloads** folder, double-click the `Postman` file to install it.
1. When prompted, move the file to your __Applications__ folder. This will ensure that future updates can be installed.

> You may encounter a "Library not loaded" error if you unzip and install Postman using a third-party archiving app. Use the default Archive Utility for Mac to unzip the file.

You can also install Postman using the [Homebrew](https://brew.sh/) package manager:

```sh
brew install --cask postman
```

## Install Postman on Linux

Postman supports the following Linux distributions: Ubuntu 14.04 and later, Fedora 24, and Debian 8 and later.

> The support of certain Linux distributions depends on if they're supported by Electron. Refer to [Electron's documentation](https://www.electronjs.org/docs/latest/development/build-instructions-linux).

You can install Postman on Linux from the [Snap](https://snapcraft.io/postman) store page or by using the command `snap install postman`. If installing from the command line, first ensure that you’re set up for [snaps](https://snapcraft.io/docs/installing-snapd). Alternatively, you can [download](https://www.postman.com/downloads/) the latest version of Postman and unpack the file using the command `tar zxf linux_64`.

> Postman recommends installing using [Snap](https://snapcraft.io/postman) because it includes all the libraries the app needs and they're bundled with the app itself.

### Create a Linux launcher icon

To start the app from a launcher icon, install the desktop file, located in the bundle, into an `applications` subdirectory of a path contained in [`$XDG_DATA_DIRS`](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html) (for example `~/.local/share/applications/`):

```shell
install -t ~/.local/share/applications/ /</path/to/file>/Postman/app/resources/Postman.desktop
```

Enter the following content in the file, replacing `</path/to/file>` with the location of the file, and save it:

```shell
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=</path/to/file>/Postman/app/Postman %U
Icon=</path/to/file>/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
```

### Linux installation notes

When installing Postman on Linux, also be aware of the following:

* Avoid starting Postman using the `sudo` command, as it will create permission issues on the files created by Postman.
* Make sure you have read/write permission for the `~/.config` folder where Postman stores information.
* If you're an Ubuntu 18 user, you will also need to install the `libgconf-2-4` package with the command `apt-get install libgconf-2-4`.
* Make sure you have `openssl` installed on your machine.

## Use the Postman web app

You can use Postman in your web browser to execute your API development and testing tasks with the Postman Agents. To access the Postman web app, visit [go.postman.co/home](https://go.postman.co/home).

> If you're using the Postman web app, Postman recommends using the Postman Desktop Agent for the best experience. See [About the Postman Agent](/docs/getting-started/basics/about-postman-agent/) for more information.

### Browser requirements

The Postman web app supports the following browsers:

* Chrome (78 and higher)
* Firefox (76 and higher)
* Edge (79 and higher)
* Safari (13.1.1 and higher)

### Install the Postman Desktop Agent

If you're using the Postman web app, Postman recommends downloading and installing the [Postman Desktop Agent](/docs/getting-started/basics/about-postman-agent/#the-postman-desktop-agent), a micro-application that runs locally on your desktop. The Desktop Agent overcomes the cross-origin resource sharing (CORS) limitations of browsers and acts as your agent for making API requests from the Postman web app.

### Web limitations

The following features require the Postman desktop app and aren't available when using the Postman web app:

* **Find and replace** - The Postman desktop app supports [finding and replacing values in a workspace](/docs/getting-started/basics/navigating-postman/#footer), but this feature isn't available in the Postman web app.
* **Proxy configuration** - The Postman desktop app enables you to [use your system's configured proxy](/docs/getting-started/installation/proxy/#configuring-proxy-settings) to send API requests or access the internet. In the Postman web app, you can configure a proxy for sending requests but not for connecting to online services.
* **Request and cookie capture** - [Interceptor](/docs/sending-requests/capturing-request-data/interceptor/) and [the Postman proxy](/docs/sending-requests/capturing-request-data/capture-with-proxy/) enable you to capture traffic and syncs cookies from your browser or client apps to the Postman desktop app. It's not possible to use Interceptor or the Postman proxy with the Postman web app.
* **Collection run export** - You can [export the results of a collection run](/docs/collections/running-collections/intro-to-collection-runs/#export-collection-runs) to a JSON file using the Postman desktop app. This feature isn't available in the Postman web app.
* **Performance testing** - You can use the Postman desktop app to [simulate user traffic](/docs/collections/performance-testing/testing-api-performance/), so you can observe how your API behaves under load. Performance testing isn't available for the Postman web app.
* **On-premises Git integration** - You must use the Postman desktop app to [connect your API](/docs/designing-and-developing-your-api/versioning-an-api/using-on-prem-git-repo/) to GitHub Enterprise Server, GitLab Self-Managed, or Azure DevOps Server repositories.
* **Lightweight Postman API Client** - You can use the [lightweight API Client](/docs/getting-started/basics/using-api-client/) to send requests from the Postman desktop app when you aren't signed in to Postman.

## Use the Postman VS Code extension

You can use the [Postman VS Code extension](/docs/getting-started/basics/about-vs-code-extension/) to test and collaborate on your APIs in the same application you're using to develop. With the VS Code extension, you can send API requests, manage collections and environments, troubleshoot requests, and more directly from VS Code. To install the VS Code extension, visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode).

## Update Postman

Postman automatically downloads updates to the Postman desktop app if you're using Postman v9.13 or later. When the download is complete, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header, then select **Update downloaded, restart now**. This restarts the desktop app and installs the update.

<img alt="Restart and install update from Settings icon" src="https://assets.postman.com/postman-docs/v10/settings-icon-install-update-desktop-v10-19.jpg" width="300px"/>

To learn more about the downloaded update before installing it, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header. Select **Settings**, then select the **Update** tab. You can select **Restart to Install Update** to restart the desktop app and install the update.

<img alt="Restart and install update" src="https://assets.postman.com/postman-docs/v10/settings-install-update-desktop-v10-19.jpg"/>

You can check for updates to the desktop app if it isn't available to install. In the **Update** tab, select **Check for Updates**.

<img alt="Check for updates" src="https://assets.postman.com/postman-docs/v10/settings-check-for-updates-desktop-v10-18.jpg"/>

## Use Postman behind a firewall

Postman's infrastructure runs on Amazon's AWS platform. If you're operating behind a network firewall, you'll need to allow the following domains to make WebSocket connections for Postman:

* `*.getpostman.com`
* `*.postman.co`
* `*.pstmn.io`
* `*.postman.com`

By default, WebSocket connections use the same ports as HTTP (80) and HTTPS (443). For Postman v10, allow the following domains:

Postman web app - WebSocket connections:

* `https://bifrost-web-v10.gw.postman.com`
* `https://bifrost-web-public-v10.gw.postman.com`
* `https://bifrost-web-v10.gw.postman.co`

Postman desktop app - WebSocket connections:

* `https://bifrost-v10-global.gw.postman.com`
* `https://bifrost-premium-v10-global.gw.postman.com`

Postman desktop app - HTTP connections:

* `https://bifrost-https-v10.gw.postman.com`
* `https://bifrost-premium-https-v10.gw.postman.com`

Postman doesn't have a fixed IP range that can be provided. If necessary, refer to the [current AWS IP ranges](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html) and allow the broad range provided.

## Troubleshoot your Postman installation

If you encounter any issues installing and running Postman, see the following tips. If these tips don't help, refer to the installation posts on the [community forum](https://community.postman.com/tags/installation) and create a new post if your issue isn't already covered. You can also contact [Postman support](https://www.postman.com/support) for help.

### Update failed error

If you get an __Update Failed__ notification in Postman, you can [use the DevTools console](/docs/introduction/troubleshooting-inapp/#accessing-the-devtools-console) to investigate. To open the DevTools console, select **View > Developer > Show DevTools (Current View)**.

![Failed update notification](https://assets.postman.com/postman-docs/v10/update-error-dialog.jpg)

Some known errors are as follows:

* **Error message** - `Cannot update while running on a read-only volume`
    * This error means that the app user doesn't have write permission in the directory where Postman is installed. To resolve the problem, move Postman to a directory where the user has write permissions, for example the `/Application` directory for Mac, and to the `home` directory for Linux.

* **Error message** - `Code signature at URL file:///... did not pass validation: code object is not signed at all`
    * This error means that there are multiple updates running at the same time. This can happen when the app is opened before the earlier update could finish. To resolve the problem, quit and reopen the app.

* **Error message** - `EACCES: permission denied, open '/opt/Postman/Postman-1620288011421.tar.gz`
    * This error means that the app user doesn't have write permission in the directory where Postman is installed. To resolve the problem, move Postman to a directory where the user has write permissions, for example the `home` directory for Linux.

### Update not available

If you're using Postman for Linux, and installed the app with the Ubuntu Software Center or Snap store, you might not have the __Check for Updates__ option in __Settings > Update__. This is because the updates are handled by the store, which automatically updates Postman on a regular cadence.

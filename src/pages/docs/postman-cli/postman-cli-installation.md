---
title: "Install the Postman CLI"
updated: 2022-10-20
warning: false
---

You can download and install the Postman CLI manually or programmatically (with a script or the command line).

## Contents

* [System requirements](#system-requirements)
* [Windows installation](#windows-installation)
* [Mac (Apple silicon) installation](#mac-apple-silicon-installation)
* [Mac (Intel) installation](#mac-intel-installation)
* [Linux installation](#linux-installation)

## System requirements

The Postman CLI supports the same operating system requirements as the Postman desktop app. For a complete list of system requirements, see [Installing and updating Postman](/docs/getting-started/installation/installation-and-updates/).

## Windows installation

Run the following commands to install the Postman CLI for Windows. This will download an install script and run it. The install script creates a `%USERPROFILE%\AppData\Local\Microsoft\WindowsApps` directory if it doesn't exist yet, then installs a `postman` binary there.

```powershell
powershell.exe -NoProfile -InputFormat None -ExecutionPolicy AllSigned -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://dl-cli.pstmn.io/install/win64.ps1'))"
```

## Mac (Apple silicon) installation

Run the following command to install the Postman CLI for Macs with an Apple silicon processor. This will download an install script and run it. The install script creates a `/usr/local/bin` directory if it doesn't exist yet, then installs a `postman` binary there.

``` bash
curl -o- "https://dl-cli.pstmn.io/install/osx_arm64.sh" | sh
```

## Mac (Intel) installation

Run the following command to install the Postman CLI for Macs with Intel chips. This will download an install script and run it. The install script creates a `/usr/local/bin` directory if it doesn't exist yet, then installs a `postman` binary there.

``` bash
curl -o- "https://dl-cli.pstmn.io/install/osx_64.sh" | sh
```

## Linux installation

Run the following command to install the Postman CLI for the latest Linux version. This will download an install script and run it. The install script creates a `/usr/local/bin` directory if it doesn't exist yet, then installs a `postman` binary there.

``` bash
curl -o- "https://dl-cli.pstmn.io/install/linux64.sh" | sh
```

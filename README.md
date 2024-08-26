# AMFA - Amor, meu futuro amor <!-- omit from toc -->

- [Overview](#overview)
- [Key features](#key-features)
  - [Letter submission](#letter-submission)
  - [Public viewing](#public-viewing)
- [Development](#development)
- [Deployment](#deployment)

## Overview

Amfa is a virtual art installation and a website that compiles letters people write to their future or great love, to be shared publicly. It also serves as an urban intervention, with the letters being wheat-pasted around the city. The project originated in Salvador, Bahia, Brazil, and encourages its spectators (or potential future collaborators) to share their poetic perspectives on the concept of the future/great love. This document will primarily focus on the virtual aspect of the project (the website) as well as its technical details. The AMFA website functions as a virtual posting wall, displaying the letters submitted by visitors in the text area. Additionally, letters can be sent to AMFA’s email address and posted by the admin team.

## Key features

### Letter submission

- Users have the hability to compose their letters in a designated text box.
- Letters can be submitted to the website and will be automaticly posted for public viewing.

### Public viewing

- All submitted letters are displayed on the website, allowing visitors to read and apreciate them.

## Development

To start developing the project,you must have Deno runtime installed on your machine as well as its extension is installed on the visual studio code.

To install the Deno runtime on your machine use one of the terminal commands below:

1. Linux/macOS
```shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```

2. Windows
```shell
irm https://deno.land/install.ps1 | iexSNA
```

After installation, you should have the deno executable available on your system path. You can confirm this is the case by running this command in your terminal:

```shell
deno --version
```

In the VS Code, install and enable Deno extension.


Create a .env.local file based on the .env.example file.
Define the MONGODB_URI enviroment variable inside the .env file.

In case you are having issues connecting to the database, please
take a look at https://github.com/denodrivers/mongo/issues/206#issuecomment-864509720


On terminal, execute the file start.sh and open http://localhost:3000 with your browser to start developing the application.

```bash
sh start.sh
```
## Deployment

This project is deployed to a Coolify instance with Nixpacks under the parent @eutiveumsonho's organization @url4irl.



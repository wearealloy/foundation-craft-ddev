# Craft CMS DDEV

## Requirements

Make sure you have [Orbstack](https://orbstack.dev/) and [DDEV](https://ddev.com/get-started/) installed.
Make sure you have installed [VSCode Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

## Stack

- PHP 8.2 (this can be changed in config.yaml)
- MySql 8
- Craft CMS ^5
- Vite
- Tailwind CSS
- Client fascing plugins included:
  - craftcms/ckeditor
  - verbb/hyper
  - solspace/craft-freeform
  - nystudio107/craft-seomatic
  - verbb/navigation
  
## Getting started

- Run `composer create-project heyblackmagic/foundation-ddev [project-name] --no-install`.

- Run `ddev config --project-name=[project-name]` to change the name (line 1) to the desire one (no spaces allowed).

- Run `ddev start` to create the container instance. This will create an instance using nginx, php 8.2, mysql 8 and composer.

- Run `ddev craft install` to create your Craft CMS instance. Accept DB password DB user and Site URL defaults [square brackets].

After this the project should be running in your Orbstack image and it should be accesible with the following url (same as in craft installation) https://[project-name-in-step-1].ddev.site

**Before moving forward:**

- Go to your admin panel at: `https://[project-name-in-step-1].ddev.site/admin` - and enable any plugins that didn't automatically enabled during setup.

## Commands

Use any composer or npm command with the prefix `ddev`:

- Run `ddev npm run dev` to watch files to start development.
- Run `ddev npm run build` to build assets.
- Run `ddev craft ...` to explore the Craft CLI
- Run `ddev code` to open the project with the VSCode Dev Container extension.
- Done for the day? `ddev stop` will spin down any containers for the project and free up system resources. `ddev start` boots everything back up, right where you left off.

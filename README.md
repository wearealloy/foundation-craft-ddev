# Craft CMS DDEV

## Requirements

Make sure you have [Orbstack](https://orbstack.dev/) and [DDEV](https://ddev.com/get-started/) installed.

## Getting started

Clone the repo.

Go to `.ddev/` > `config.yaml` > change the name (line 1) of the container to the desire one (no spaces allowed). 
Rename the project folder to use that same name.

Run `ddev start` to create the container instance. This will create an instance using nginx, php 8.2, mysql 8 and composer.

Run `ddev composer install`.

Run `ddev craft install` to create your Craft CMS instance. Accept DB password DB user and Site URL defaults [square brackets].

Run `ddev npm install`

After this the project should be running in your Orbstack image and it should be accesible with the following url (same as in craft installation) https://[project-name-in-step-1].ddev.site

**Before moving forward:**

- Check that your `PRIMARY_SITE_URL` in the `.env` does **not** include a trailing slash. It should look like: `https://[project-name-in-step-1].ddev.site`
- Go to your admin panel at: `https://[project-name-in-step-1].ddev.site/admin` - and enable any plugins that didn't automatically enabled during setup.

## Commands

Use any composer or npm command with the prefix `ddev`:

- Run `ddev npm run dev` to watch files to start development.
- Run `ddev npm run build` to build assets.
- Run `ddev craft ...` to explore the Craft CLI
- Done for the day? `ddev stop` will spin down any containers for the project and free up system resources. `ddev start` boots everything back up, right where you left off.

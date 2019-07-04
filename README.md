# Welland Canal Api

Back end API for the Welland Canal Mobile application.

The Welland Canal Bridge Status Mobile application can be found [on the google play store](https://play.google.com/store/apps/details?id=com.nextappointments.wellandcanal&hl=en)

## Prerequisites

Install docker and docker compose as per this [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04)

## Getting Started

Please update the password in `sample.env` file and rename the `sample.env` file to `secret.env`

Once the enviroment variables file has been updated, start the application with the following command.

`docker-compose up -d`

The application should be running at [localhost:8080](http://localhost:8080)

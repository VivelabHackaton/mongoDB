#!/bin/bash
docker-compose down
sudo rm -r mongodb/
docker-compose build
docker-compose up
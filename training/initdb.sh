#!/bin/bash

sudo docker run --name postgres-container -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres

SHELL := /bin/bash

up:
	docker-compose up --build

down:
	docker-compose down

tests:
	docker-compose run app sh -c "./node_modules/jest/bin/jest.js --forceExit"

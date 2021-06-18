.ONESHELL:
.SHELL := /usr/bin/bash -e

#Set aws profile
AWS_PROFILE?=default
REGION?=eu-west-1

#Set default env
ENV?=dev

cdn-deploy:
	cp .env.$(ENV) .env || echo "No env files"
	npm i
	npm run generate
	aws s3 sync dist s3://mg-web-www-$(ENV)


storybook-deploy:
	cp .env.$(ENV) .env || echo "No env files"
	npm i
	npm run build-storybook
	aws s3 sync storybook-static s3://mg-web-storybook-$(ENV)

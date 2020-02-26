

# Augurisk back-end
> The back end of Augurisk built by Node.js

![Augurisk](https://i.imgur.com/VCa0myj.png)

[![NPM Version][augurisk-image]][augurisk-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][augurisk-url]

Scientific and technological services, namely, scientific research in the field of climate change, natural hazards, weather, hurricanes, storm events; software as a service (SaaS) services featuring software for SaaS for natural hazards research and risk audit; Electronic reporting of data for climate change, natural hazards, weather, hurricanes, and storm events using computers or sensors in the fields of science and technology; technology advisory services related to scientific research in the fields of climate change, natural hazards, weather, hurricanes, storm events

## IMPORTANT NOTICE
During Every stack update, it is required to update the USERS_TABLE Environmental Variable of the Augurisk-cognito-post-confirmation pre-signup trigger lambda function.
How to isolate environments ? Must either be done through cognito or must change cognito pool.

![](header.png)

## Requierments
* Node.js version 10 or later.
* Serverless: 1.58.0 or later.
* Stripe: 7.9.1 or later.

## Uses/Features
* [node.js 10+](https://nodejs.org/): Runtime environment
* [serverless](https://serverless.com/): Framework for build applications comprised of microservices
* [ejs](https://www.npmjs.com/package/ejs): Embedded JavaScript templates
* [uuid](https://www.npmjs.com/package/uuid): Simple, fast generation of RFC4122 UUIDS.
* [aws-sdk](https://www.npmjs.com/package/aws-sdk): AWS SDK for JavaScript
* [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variable
* [jest](https://jestjs.io): Testing Framework
* [serverless-http](https://www.npmjs.com/package/serverless-http): serverless-http
* [serverless-domain-manager](https://github.com/amplify-education/serverless-domain-manager): Create custom domain names that your lambda can deploy to with serverless
* [dynamodb](https://aws.amazon.com/dynamodb): Fast and flexible NoSQL database service for any scale
* [aws ses](https://aws.amazon.com/ses):  Amazon Simple Email Service
* [aws secrets manager](https://aws.amazon.com/fr/secrets-manager): Manage, retrieve credentials
* [aws cognito](https://aws.amazon.com/cognito): Simple and Secure User Sign-Up, Sign-In, and Access Control
* [aws route 53](https://aws.amazon.com/route53/): A reliable and cost-effective way to route end users to Internet applications
* [aws simple queue service](https://aws.amazon.com/sqs/): Fully managed message queues for microservices
* [postman](https://www.getpostman.com): The Collaboration Platform for API Development

## Installation
```sh
git clone https://github.com/skytrendma/augurisk-api.git
```
```sh
cd augurisk-api
```
It will install all the dependencies
```sh
npm install
```
It will deploy your root stack
```sh
sls deploy
```
It will deploy your stripe stack
```sh
cd stripe && sls deploy
```
It will remove your stack
```sh
sls remove
```

## Emails
```sh
sendMail : augurisk-api\services\contact\main.js:sendMail():line26
```
```sh
sendNewsletter: augurisk-api\services\contact\main.js:sendNewsletter():line95
```

## Error Status Codes

* 200: OK
* 301: Moved permanently
* 400: Bad Request (malformed request syntax, invalid request message parameters, ...)
* 401: Unauthorized: Wrong credentials or none 
* 403: Forbidden: User doesn't have proper permissions
* 404: Not found
* 405: Method not allowed
* 500: Internal server error: Generic error response, not the client's fault


More information: [Http status](https://restfulapi.net/http-status-codes)

## Sentry
#### For change Sentry configs:  *augurisk-api\utilities\sentry.js*
#### For change the DSN:  *serverless.yml:line28* :
```yml
environment:
	SERVICE_NAME:  ${self:service.name}
	STAGE:  ${opt:stage, self:provider.stage}
	SERS_TABLE: { "Ref":  "users" }
	.
	.
	SENTRY_DSN:  https://0dc9558ffb934657b6c3b97182b4338d@sentry.io/1882963
```
#### Trigger Sentry event
```javascript
// Import SentryUtil 
const SentryUtil =  require("../../utilities/sentry");
.
.
// In catch
await SentryUtil.captureException(new  Error(error));
```

## API Doc
##### We use Postman for managing api docs
* Our api doc (Staff): [apidoc-team.augurisk.com](apidoc-team.augurisk.com)
* Clients api doc (Users with enterprise plan): [apidoc.augurisk.com](apidoc-team.augurisk.com)

## Rules
* You are responsible on every line you wrote so make it clean & clear
* Comment every unclear logics
* Header comment of every single function
* Don't overwrite collegue's codes without dicuss with them

## Contributing

1. Clone it (<https://github.com/skytrendma/augurisk-api.git>)
2. Create your feature branch (`git checkout -b feature/featureName`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/featureName`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[augurisk-image]: https://img.shields.io/badge/augurisk--backend-v0.1-brightgreen
[augurisk-url]: https://augurisk.io
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://augurisk.io

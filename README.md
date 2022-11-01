# honeypot-bot

[![node-cron](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/honeypot-bot/node-cron)](https://www.npmjs.com/package/node-cron) [![honeygain.js](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/honeypot-bot/honeygain.js)](https://www.npmjs.com/package/honeygain.js) [![simple-discord-webhooks](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/honeypot-bot/simple-discord-webhooks)](https://www.npmjs.com/package/simple-discord-webhooks)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/honeypot-bot.svg)](https://github.com/LockBlock-dev/honeypot-bot/stargazers)

Simple Honeygain honeypot bot

Bugs can occur, this is an unofficial use of the HoneyGain API.

## Installation

-   Install [NodeJS](https://nodejs.org).
-   Download or clone the project.
-   Run `npm install`.
-   In the [config.json](./config.json), you need to edit the authorization and the discordWebhookURL:

```json
{
    "authorization": "HONEYGAIN TOKEN",
    "discordWebhookURL": "https://discord.com/api/webhooks/XXXXXXXXXXXXX/XXXXXXXXXXXXXXx"
}
```

-   Run `node index.js` OR `npm start`.

## How do I find my Authorization token ?!

Please check this [link](https://github.com/LockBlock-dev/honeygain.js/blob/master/Authorization.md).

## Credits

[HoneyGain](https://honeygain.com)

## Copyright

See the [license](/LICENSE)

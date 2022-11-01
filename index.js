const { Client } = require("honeygain.js");
const cron = require("node-cron");
const { Webhook } = require("simple-discord-webhooks");
const config = require("./config.json");

const client = new Client();
const postman = new Webhook(config.discordWebhookURL);
const RETRY_MAX = 5;

client.login(config.authorization);

const main = async () => {
    const embed = {
        title: "HoneyGain Honeypot report",
        thumbnail: {
            url: "https://cdn.discordapp.com/attachments/943520861565091891/943826193734590494/hg_logo_icon_color_dark.png",
        },
        fields: [],
        footer: {
            text: "HoneyGain Honeypot bot © LockBlock-dev",
        },
    };

    const { data: user } = await client.me();
    const { data: notifications } = await client.notifications();

    if (notifications.length === 0)
        console.log(new Date().toISOString(), "Honeypot already claimed today!");
    else {
        await client.notificationsAction(notifications[0].hash, {
            campaign_id: notifications[0].campaign_id,
            action: "triggered",
            user_id: user.id,
        });

        const { data: winnings } = await client.contestWinnings();

        console.log(new Date().toISOString(), `Congrats you won ${winnings.credits}CR today!`);

        embed.fields.push({
            name: "Winnings:",
            value: `${winnings.credits} CR`,
        });

        await client.notificationsAction(notifications[0].hash, {
            campaign_id: notifications[0].campaign_id,
            action: "closed",
            user_id: user.id,
        });

        postman.send(null, [embed]);
    }
};

cron.schedule("0 12 */1 * *", async () => {
    for (let i = 0; i < RETRY_MAX; i++) {
        try {
            main();
        } catch (e) {
            console.error(new Date().toISOString(), e);
        }
    }
});

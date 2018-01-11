/**
 * Slack API
 */
const Slackbots = require('slackbots');

export class Slackbot {

    /**
     * Initialize Slack bot
     */
    constructor() {
        this.bot = new Slackbots({
            token: process.env.SLACK_BOT_TOKEN,
            name: process.env.SLACK_BOT_USER
        });

        this.bot.on('start', () => {
            this.listenForMessage();
        });
    }

    listenForMessage() {
        this.bot.on('message', (data) => {
            if (data.type !== 'message') {
                return;
            }

            this.postMessage(data.user, 'Message received');
        });
    }

    /**
     * Post Slack message to channel (aka user)
     * @param  {string} channel Encoded ID or user name
     * @param  {string} message Message text
     */
    postMessage(channel, message) {
        this.bot.postMessage(
            channel,
            message,
            {
                "as_user": true,
                "username": process.env.SLACK_BOT_USER
            }
        );
    }
}

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

        this.listenForMessage();
    }

    listenForMessage() {
        this.bot.on('message', (data) => {
            if (data.type !== 'message') {
                return;
            }
        });
    }

    /**
     * Post Slack message to channel (aka user)
     * @param  {string} channel Encoded ID or user name
     * @param  {string} message Message text
     */
    postMessage(channel, message) {
        channel = '@' + channel;

        //replacing with different package
        this.bot.postMessageToUser(
            channel,
            message
        );
    }
}

/**
 * Slack API
 */
const Slack = require('slack');

export class Slackbot {

    /**
     * Initialize Slack bot
     */
    constructor() {
        this.bot = new Slack(process.env.SLACK_BOT_TOKEN);
    }

    /**
     * Post Slack message to channel (aka user)
     * @param  {string} channel Encoded ID or user name
     * @param  {string} message Message text
     */
    postMessage(channel, message) {
        this.bot.chat.postMessage({
            'token': process.env.SLACK_BOT_TOKEN,
            'channel': '@' + channel,
            'text': message,
            'as_user': true,
            'username': process.env.SLACK_BOT_USER
        });
    }
}

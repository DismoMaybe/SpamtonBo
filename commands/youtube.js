module.exports = {
    name: 'youtube',
    description: "sends a link to the channel",
    execute(message, args) {


        message.channel.send('https://www.youtube.com/channel/UCdtuLYVnlvUkUWd1tyebetg/')

    }
}
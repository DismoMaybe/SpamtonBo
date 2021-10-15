const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    description: "it clears messages.",
    async execute(message, args) {

        if (message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {


            if (!args[0]) return message.reply("Not enough Kromer...");
            if (isNaN(args[0])) return message.reply("https://tenor.com/view/spamton-deltarune-punching-punching-wall-punching-the-wall-gif-23393913");

            if (args[0] > 100) return message.reply("[You have too many Wacky Stacks!?!]");
            if (args[0] < 1) return message.reply("[You don't have enough Wacky Stacks!?!]");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });

        } else {
            message.channel.send('neeD to bE [Big Shot]')

        }
    }
}
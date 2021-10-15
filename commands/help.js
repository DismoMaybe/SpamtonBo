module.exports = {
    name: 'help',
    description: "gives you a command list!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Spamton Commands')
        .setDescription('All the commands for the Spamton Bot!')
        .addFields(
            {name: '>ping', value: 'does a redundant joke'},
            {name: '>help', value: 'gives you a command list'},
            {name: '>youtube', value: 'sends a link to the channel'},
            {name: '>twitch', value: 'sends the twitch link!'},
            {name: '>clear', value: 'it clears messages.'},
            {name: '>mute', value: 'make people shut up'},
            {name: '>unmute', value: 'make people shut up but no'},
            {name: '>kick', value: 'come on, really?'},
            {name: '>ban', value: 'seriously now?'}

        )
            .setImage('https://tenor.com/view/spamton-deltarune-punching-punching-wall-punching-the-wall-gif-23393913') 
            .setFooter('Awesome');

            message.channel.send({embeds: [newEmbed]});
    }

}
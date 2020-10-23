const ms = require('ms')
exports.run = async (client, message, args, color, prefix) => {
  
    try {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      if (message.mentions.users.size != 0) {
        if (message.mentions.members.first().bannable) {
          message.mentions.members.first().ban().then(m => {
            message.channel.send(`<a:Yes:765947353793560626> | **${m.user.username}** has been banned from **${message.guild.name}**`);
          });
        } else {
          message.channel.send(`**${message.mentions.user.first().username}** is too priveledged for me to ban.`);
        }
      } else {
        message.channel.send('<a:No:765947439655026718> | Please tag the user you would like to kick.')
      }
    } else {
      message.channel.send(`<a:No:765947439655026718> | **${message.author.username}**, You do not have permission to ban. You must have the \`Ban Members\` permission.`);
    }
  } catch (err) {
    message.channel.send(`<a:No:765947439655026718> | Either I am unable to ban **${message.mentions.users.first().username},** or I do not have permission to banned members.`);
  }

}

const ms = require('ms');
const discord = require("discord.js");
const talkedRecently = new Set();

    exports.run = async (client, message, args) =>{
   if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 Second Before Getting Typing This Again");
    } else {
    
    let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  
  const embed = new discord.MessageEmbed()
  .setTitle(`${user.tag} | Avatar`)
  .setFooter(`Request By ${message.author.username}`)
  .setDescription(`[Avatar URL](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
    message.channel.send(embed)
   talkedRecently.add(message.author.id);
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 5000); //1000 = 1 detik
    }
    }

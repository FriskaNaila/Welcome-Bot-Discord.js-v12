// paste this is your message event 




// welcome bot


const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome'); // welcome = channel name
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `${member.user.tag} Welcome to the Server!`, // welcome message
      attachment
    );   
   });


 // goodbye bot


client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'leave'); // leave = channel name
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `${member.user.tag} Lefted The Server :sob:!`, // good bye message
      attachment
    );   
   });

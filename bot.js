const Discord = require('discord.js')
const client = new Discord.Client()

var generalChannel = false
var germUserId = "555130004074135563" 
var chanToUse = "559733838369128461"

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
	generalChannel = client.channels.get(chanToUse)
	generalChannel.send("J'arrive pour pourrir germ !!!") 
})

client.on('presenceUpdate', (oldMember, newMember) => {
	if (generalChannel != false) {
		if (oldMember.user.id == germUserId) {
			generalChannel.send("Coucou @" + newMember.user.username + " !!! https://www.youtube.com/watch?v=5CJ_fdEJy3Y") 
		}
	}
})

client.login(process.env.BOT_TOKEN)
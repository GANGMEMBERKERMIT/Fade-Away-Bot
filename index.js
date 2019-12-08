const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	client.user.setStatus('available')
    client.user.setPresence({
		game: {
            name: 'Fade Away',
            type: "Watching",
            url: "Your messages"
        }
    });
  console.log(`!${client.user.tag}!`)
})			

client.on('guildMemberAdd', member => {
	const guild = member.guild;
	let role = member.guild.roles.find(r => r.name == 'Member')
	member.addRole(role)
	var memberCount = (guild.members.filter(member => !member.user.bot).size);
	guild.channels.find(channel => channel.name === "👋welcome").send({embed: { ////////////////////////////////////////////////////
			color: 13632027,
			title: "**Welcome**",
			description: "Welcome "+member+" to the discord of **Fade Away**.",
			thumbnail: {
				url: 'https://images-ext-2.discordapp.net/external/W-tjivRZ5NysfWlb7DnfioPwoOQFfF7Yosvivp7KuCM/https/cdn.discordapp.com/avatars/647827700127367168/f63c8624ac387e0300e511f11a32cbc8.png',
			},
	}});
	member.send({embed: {
		color: 13632027,
		title: "**Welcome**",
		description: "Hey "+member+" Thank you for joining to the **Codrus Network**!",
	}});
});

client.on('message', msg => {
  if (msg.content === '!rules') {
	if (msg.member.roles.some(r=>["Founder", "Owner"].includes(r.name)) ) {
		msg.delete(),
		msg.channel.send({embed: {
			color: 13632027,
			title: "**RULES**",
			description: "**1.** Don't be toxic\n \n**2.** Don't post links to inappropriate pictures, videos, or websites - This includes but not limited to NSFW, Jump Scare, or Screamer links within any channel.\n \n**3.** Don't spam in any channel - This includes large paragraphs and copypasta\n \n**4.** No Racism/Sexism/Homophobia of any kind is tolerated.\n \n**5.** No NSFW - This will result in a ban. (This includes through DM's also)\n \n**6.** No Doxing - Don't share, or ask for, the personal information of anyone inside/outside of the community. (This will also result in an in-game suspension)\n \n**7.** No DDoS threats - Don't send DDoS threats, or engage in DDoS comedy, even if it's a joke.\n \n**8.** No Advertising - Please don't advertise servers or other discord servers.\n \n**9.** Don't sell accounts - This is not the place to advertise or sell accounts.\n \n**10.** Don't be an idiot - Use common sense.\n \n **11.** Do NOT make others break rules, you'll receive the same punishment.\n \n**12.** Listen to and respect staff members.\n \n**13.** Do not impersonate staff - This is something we take seriously.\n \n **13.** Do not @ staff members without a good reason.",
			footer: {
			  icon_url: client.user.avatarURL,
			  text: "codrus.club"
			}
	    }});
	}
  }
  if (msg.content === '!info') {
	if (msg.member.roles.some(r=>["Founder", "Owner"].includes(r.name)) ) {
		msg.delete(),
		msg.channel.send({embed: {
			color: 13632027,
			title: "**INFORMATIONS**",
			description: "Welcome to the **Codrus Network**\n \nWhat Our Network is going to be\n \n:bell:HCF:bell:\n \n:bell:Practice:bell:\n \n:bell:Kitmap:bell:\n \n:bell:UHC:bell:\n \n:bell:PotSG:bell:\n \n:bell:UHCMeetup:bell:\n \n:bell:KitPvP:bell:\n \n:pushpin:**This is the new home of the Minecraft Competitive PvP:pushpin:\n \n**IP:**Codrus.club\n \n:crossed_swords: We will always have updates and new futures,:crossed_swords:",	
			footer: {
				icon_url: client.user.avatarURL,
				text: "codrus.club"
			},
			get footer() {
				return this._footer;
			},
			set footer(value) {
				this._footer = value;
			},
		}});
	}
  }
  if (msg.content === '!addallmembers') {
	if (msg.member.roles.some(r=>["Founder"].includes(r.name)) ) {
		msg.delete(),
		msg.channel.send({embed: {
			color: 13632027,
			title: "**WORKING...**",
			description: " \nAdding Member role to all users...\n",	
			footer: {
			  icon_url: client.user.avatarURL,
			  text: msg.member.user.tag,
			}
		}});
		let role = msg.guild.roles.find(r => r.name == 'Member')
		if (!role) return //msg.channel.send(`**${message.author.username}**, role not found`)
		msg.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
		msg.channel.send({embed: {
			color: 13632027,
			title: "**SUCCESSFULL !**",
			description: " \nAdded Member role to all users !\n",	
			footer: {
			  icon_url: client.user.avatarURL,
			  text: msg.member.user.tag,
			}
		}});
	}
  }
  if (msg.content === '!serverclose') {
	if (msg.member.roles.some(r=>["Founder", "Owner", "Admin", "Head-Admin"].includes(r.name)) ) { ////////////////////////////////////////////////////
		msg.delete(),
		msg.channel.send({embed: {
			color: 13632027,
			title: "**ANNOUNCE**",
			description: (Text),
			timestamp: new Date(),
			footer: {
			  icon_url: msg.member.user.avatarURL,
			  text: msg.member.user.tag,
			}
		}});
	}
  }
  if (msg.content === '!serveropen') {
	if (msg.member.roles.some(r=>["Founder", "Owner", "Admin", "Head-Admin"].includes(r.name)) ) { ////////////////////////////////////////////////////
		msg.delete(),
		msg.channel.send({embed: {
			color: 13632027,
			title: "**ANNOUNCE**",
			description: "Codrus Practice is on! Join it now !!\n \n**Links**:\n**IP**: codrus.club\n**TS**: ts.codrus.club\n \n[@everyone]",
			timestamp: new Date(),
			footer: {
			  icon_url: msg.member.user.avatarURL,
			  text: msg.member.user.tag,
			}
		}});
	}
  }
  if (msg.content === '!appsopen') {
	if (msg.member.roles.some(r=>["Owner", "Admin", "Head-Mod", "Head-Admin"].includes(r.name)) ) { ////////////////////////////////////////////////////
		msg.delete(),
		msg.channel.send({embed: {
			color: 13632027,
			title: "**ANNOUNCE**",
			description: "We're currently looking for staff, Feel free to apply at #applications.\n \n**Links**:\n**IP**: codrus.club\n**TS**: ts.codrus.club\n \n[@everyone]",
			timestamp: new Date(),
			footer: {
			  icon_url: msg.member.user.avatarURL,
			  text: msg.member.user.tag,
			}
		}});
	}
  }
  if (msg.content === '!appsclose') {
	if (msg.member.roles.some(r=>["Founder", "Owner", "Admin", "Head-Mod", "Head-Admin"].includes(r.name)) ) { ////////////////////////////////////////////////////
		msg.delete(),
		msg.channel.send({embed: {
			color: 13632027,
			title: "**ANNOUNCE**",
			description: "Codrus is not longer looking for staff. We'll broadcast once they're open again.\n \n**Links**:\n**IP**: codrus.club\n**TS**: ts.codrus.club\n \n[@everyone]",
			timestamp: new Date(),
			footer: {
			  icon_url: msg.member.user.avatarURL,
			  text: msg.member.user.tag,
			}
		}});
	}
  }
})

client.login('NjQ3ODI3NzAwMTI3MzY3MTY4.XeuvTg.mCCW77fMrtbh14A2m0dA7pZCzpU')
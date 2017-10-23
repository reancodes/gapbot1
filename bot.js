const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.user.setGame('"!help" For Commands');

client.on('message', msg => {
  if (msg.content === 'test') {
    msg.reply('Test');
  }
});
client.on('message', msg => {
    if (msg.content === '!genta') {
    msg.channel.sendMessage('Tak til Genta for at dev mig her til verden!');
    }
  });
  client.on('message', msg => {
    if (msg.content === '!ip') {
      msg.channel.sendMessage("G.A.P's CS:GO Server:") + msg.channel.sendMessage("connect 93.186.198.118:32615");
    }
  });
  client.on('message', msg => {
    if (msg.content === '!owners') {
      msg.channel.sendMessage("G.A.P's Owners: Skippy, Genta");
    }
  });
  client.on('message', msg => {
    if (msg.content === 'pxnda') {
      msg.channel.sendMessage("Pxnda is a littttle biiiiiiitch!");
    }
  });
  client.on('message', msg => {
    if (msg.content === 'ddos tool') {
      msg.channel.sendMessage("Søger du et ddos tool?") + + msg.channel.sendMessage("Så kan du købe det lige her!: http://stresser.gq/"); + msg.channel.sendMessage("Hvis du skal købe så kontakt os! :100:");
    }
  });
  client.on('message', msg => {
    if (msg.content === '!bot') {
      msg.channel.sendMessage("Botten er lavet af Genta");
    }
  });
  client.on('message', msg => {
    if (msg.content === '!steam') {
      msg.channel.sendMessage("Skippy's Profil: http://steamcommunity.com/profiles/76561198294357301/") + msg.channel.sendMessage("Genta's Profil: http://steamcommunity.com/id/DistureGenta/");
    }
  });
  client.on('message', msg => {
    if (msg.content === 'comp') {
      msg.channel.sendMessage("Ja vi er altid med på en comp!");
    }
  });
  client.on('message', msg => {
    if (msg.content === '!boost') {
      msg.channel.sendMessage("Du kan købe boost af os, Så Kontakt os og vi finder en pris til dig/jer!");
    }
  });
  client.on('message', msg => {
    if (msg.content === '!sign') {
      msg.channel.sendMessage("Ja vi signer alle, Hvis du vil have din profil signed af os, Så kontakt os!");
    }
  });
// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '!avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});
client.on('message', msg => {
  if (msg.content === '!regler') {
    msg.channel.sendMessage("Regler:");
    msg.channel.sendMessage("Man må ikke synge i voices rummene.");
    msg.channel.sendMessage("Man må ikke spamme i nogen af chattese på discorden.");
    msg.channel.sendMessage("Hvis du er 'AFK/Muter Dig Selv' så skal man gå i afk rum.");
    msg.channel.sendMessage("Man må ikke abuse bots.");
    msg.channel.sendMessage("Man må ikke spørger om ranks på discorden.");
  }
});
client.on('message', msg => {
  if (msg.content === '!help') {
    msg.channel.sendMessage("Commands: !sign, !boost, !steam, !bot, !owners, !ip");
  }
});
client.on('message', msg => {
  if (msg.content === 'joined') {
    msg.channel.sendMessage("Hej Og Velkommen til G.A.P's Discord!");
    msg.channel.sendMessage("(Jeg er en bot!)");
    msg.channel.sendMessage("Du kan bruge '!help' til at se alle mine commands jeg har på mig!");
  }
});
client.on('message', msg => {
  if (msg.content === '!design') {
    msg.channel.sendMessage("Søger du/i et banner eller andet? så kan du for det lige her (gratis), Så kontakt os!");
  }
});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.BOT_TOKEN);

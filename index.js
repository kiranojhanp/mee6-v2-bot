const Discord = require("discord.js");
const alldata = require("./data.json");

const client = new Discord.Client();

const prefix = ":";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command == "roast") {
    
    let id;
    const name = args[0].toLowerCase();

    switch (name) {
      case undefined:
      case null:
        id = 8;
        break;

      case "dristi":
        id = 0;
        break;

      case "kiran":
        id = 1;
        break;

      case "ashish":
        id = 2;
        break;

      case "yashika":
      case "yaku":
        id = 3;
        break;

      case "sameekhsya":
      case "sam":
        id = 4;
        break;

      case "pratik":
        id = 5;
        break;

      case "everyone":
        id = 6;
        break;

      default:
        break;
    }

    let randomroast = Math.floor(Math.random() * alldata[id].length);
    message.reply(alldata[id][randomroast]);
  }
});

client.login(alldata.BOT_TOKEN);

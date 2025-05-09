const { readdirSync, readdir } = require("fs");
const ExtendedClient = require("../class/ExtendedClient");
const { Message, EmbedBuilder } = require("discord.js");
const colors = require("../colors.json");
const User = require("../schemas/user");

/**
 *
 * @param {ExtendedClient} bot
 * @param {Message} message
 */

module.exports = (bot, message) => {
  let allowed = [
    "473568312840814610",
    "274021702411747328",
    "695891893342568508",
  ];

  if (!message.member?.roles.cache.has(process.env.STAFF_ROLE)) {
    const guild = bot.guilds.cache.get("755968485854675065");
    const logChannel = guild.channels.cache.get("903543603589173249");

    const listeners = ["@oasis", "@Oasis", `<@473568312840814610>`];

    // const listeners = [
    //     "@istay",
    //     "@IStay",
    //     `<@274021702411747328>`
    // ]

    const channel = bot.channels.cache.get("1214645737846214676");

    if (allowed.includes(message.author.id)) return;
    if (allowed.includes())
      listeners.forEach(async (word) => {
        if (message.content.includes(word)) {
          message.channel.send(
            `${message.author}, please don\'t ping Oasis! Make sure you read <#756718628207984760> :)`
          );

          const user = await User.findOne({
            guildID: message.guild.id,
            userID: message.author.id,
          });

          if (!user) {
            const newUser = new User({
              _id: mongoose.Types.ObjectId(),
              guildID: message.guild.id,
              userID: message.author.id,
              pingedOasis: 1,
            });

            await newUser
              .save()
              .then((result) => console.log(result))
              .catch((err) => console.error(err));
          } else {
            user
              .updateOne({
                pingedOasis: user.pingedOasis + 1,
              })
              .then((result) => console.log(result))
              .catch((err) => console.error(err));

            let embed = new EmbedBuilder()
              .setTitle("User Pinged Oasis")
              .setColor(colors.MUSIC)
              .setDescription(
                `${message.author} tried to ping Oasis! They have now tried to ping Oasis **${user.pingedOasis}** time(s)!`
              );

            logChannel.send({
              embeds: [embed],
            });
          }
        }
      });
  }
};

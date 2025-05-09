const config = require("../../config");
const ExtendedClient = require("../../class/ExtendedClient");
const { EmbedBuilder } = require("discord.js");
const moment = require("moment");

module.exports = {
  event: "guildMemberAdd",
  /**
   *
   * @param {ExtendedClient} bot
   * @param {import('discord.js').Interaction} interaction
   * @returns
   */
  run: async (bot, member) => {
    const guild = bot.guilds.cache.get(process.env.GUILD_ID);
    const joinChannel = bot.channels.cache.get(process.env.JOINS);

    const staffServer = bot.guilds.cache.get(process.env.STAFF_SERVER);
    const logChannel = staffServer.channels.cache.get(process.env.JOINANDLEAVE);

    if (member.guild.id === staffServer.id) return;

    joinChannel.send({
      content: `## Hiya!  ⌍${member.user.username}.⌎ ✧ Welcome to The Starfall Islands⚡ ⊹˚𓂃・✧\n✨Select your pronouns at <id:customize> and feel free to introduce yourself in <#903578658986418197>! ✨ 🌊 Make yourself at home :>\n\n**Member** #${guild.memberCount}`,
      allowedMentions: { parse: [] },
    });
    setTimeout(() => {
      joinChannel.send({
        content: `${member.user}`,
      });
    }, 3000);

    console.log(member);

    let log = new EmbedBuilder()
      .setColor("Green")
      .setAuthor({
        name: `New Member Joined`,
        iconURL: member.user.displayAvatarURL({ dynamic: true }),
      })
      .setDescription(`${member.user} ${member.user.username}`)
      .addFields({
        name: "Account Created",
        value: `<t:${Math.round(member.user.createdAt / 1000)}:R>`,
      })
      .setFooter({ text: `ID: ${member.id}` })
      .setTimestamp();

    logChannel.send({
      embeds: [log],
    });
  },
};

const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");

module.exports = {
  structure: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns ping"),
  options: {
    developers: true,
  },
  /**
   * @param {ExtendedClient} bot
   * @param {ChatInputCommandInteraction} interaction
   */
  run: async (bot, interaction) => {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    // const member = await interaction.guild.members.fetch("274021702411747328");
    // console.log(`1st: ${member}`);

    const response = await fetch(
      `https://discord.com/api/v10/guilds/755968485854675065/members/473568312840814610`,
      {
        method: "GET",
        headers: {
          Authorization: `Bot ${process.env.TOKEN}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    const newMessage = `API Latency: ${bot.ws.ping}\nBot Ping: ${
      message.createdTimestamp - interaction.createdTimestamp
    }`;
    await interaction.editReply({
      content: newMessage,
    });

    // await interaction.reply({
    //   content: `Select one of the components below. ${process.env.CURRENCY}`,
    //   components: [
    //     new ActionRowBuilder().addComponents(
    //       new ButtonBuilder()
    //         .setCustomId("example-button")
    //         .setLabel("Example Button")
    //         .setStyle(1)
    //     ),
    //   ],
    // });
  },
};

const {
  ButtonInteraction,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");
const ExtendedClient = require("../../class/ExtendedClient");
const { sendResponse } = require("../../utils/utils");

module.exports = {
  customId: "fanart-info",
  /**
   *
   * @param {ExtendedClient} bot
   * @param {ButtonInteraction} interaction
   */
  run: async (bot, interaction) => {
    await interaction.deferReply({ ephemeral: true });

    const attachment = new AttachmentBuilder(
      "./src/images/character-sheet.jpg"
    );

    const embed = new EmbedBuilder()
      .setColor("DarkPurple")
      .setTitle("Sending Fan Art")
      //   .setDescription(
      //     "If you have any fan art that is **original** and that can be used in server-wide designs, such as logos and banners, post here! Be creative! If you need Oasis's (Swiftblade's) character sheet you can access it below. If you have any questions, please contact staff."
      //   )
      .setDescription(
        "If you have any fanart that is original post it here! Be creative! Oasis's (Swiftblade's) character sheet is attached below if needed. If you have any questions regarding fanart boundaries, visit the link below.\n\n:link: **[Click Here](https://oasisyt.carrd.co/#ocsheet)**"
      )
      .setImage(`attachment://character-sheet.jpg`);

    sendResponse(interaction, ``, [embed], [attachment], [], true);
  },
};

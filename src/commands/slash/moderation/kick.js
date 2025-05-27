const {
  SlashCommandBuilder,
  CommandInteraction,
  ApplicationCommandType,
  ApplicationCommandOptionType,
  EmbedBuilder,
  codeBlock,
  PermissionFlagsBits,
  hyperlink,
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");
const warnSchema = require("../../../schemas/warnSchema");
const rules = require("../../../utils/rules");
const { uuid } = require("uuidv4");
const { sendResponse, dbCreate, dbDeleteOne } = require("../../../utils/utils");

module.exports = {
  structure: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a user")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption((option) =>
      option
        .setName("username")
        .setDescription("The user you are intending to kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("Reason for punishment")
        .setRequired(true)
        .addChoices(
          {
            name: "Rule 1 - Not respectful, harassment, bullying, racism, sexism, etc.",
            value:
              "Violation of Rule 1 - Not respectful, harassment, bullying, racism, sexism, etc.",
          },
          {
            name: "Rule 2 - Not obeying staff members, arguing",
            value: "Violation of Rule 2 - Not obeying staff members, arguing",
          },
          {
            name: "Rule 3 - Execessive swearing, towards another user",
            value:
              "Violation of Rule 3 - Execessive swearing, towards another user",
          },
          {
            name: "Rule 4 - NSFW content (profiles, etc.)",
            value: "Violation of Rule 4 - NSFW content (profiles, etc.)",
          },
          {
            name: "Rule 5 - Unsafe links, dox, etc.",
            value: "Violation of Rule 5 - Unsafe links, dox, etc.",
          },
          {
            name: "Rule 6 - Spam/Mass Ping",
            value: "Violation of Rule 6 - Spam/Mass Ping",
          },
          {
            name: "Rule 7 - Not using channels for their correct usage",
            value:
              "Violation of Rule 7 - Not using channels for their correct usage",
          },
          {
            name: "Rule 8 - Uncomfortable topics discussed",
            value: "Violation of Rule 8 - Uncomfortable topics discussed",
          },
          {
            name: "Rule 9 - Disruptive in VC",
            value: "Violation of Rule 9 - Disruptive in VC",
          },
          {
            name: "Rule 10 - Self-promoting, loopholes, underage (joking or not), upsetting others, etc.",
            value:
              "Violation of Rule 10 - Self-promoting, loopholes, underage (joking or not), upsetting others, etc.",
          },
          {
            name: "Rule 11 - Punishment evasion",
            value: "Violation of Rule 11 - Punishment evasion",
          },
          {
            name: "Rule 12 - Discussing other users' punishments",
            value: "Violation of Rule 12 - Discussing other users' punishments",
          },
          {
            name: "Rule 13 - Violation of Discord TOS/Community Guidelines",
            value:
              "Violation of Rule 13 - Violation of Discord TOS/Community Guidelines",
          },
          { name: "Custom", value: "custom" }
        )
    )
    .addAttachmentOption((option) =>
      option
        .setName("screenshot")
        .setDescription("A screenshot of the reason")
        .setRequired(false)
    )
    .addAttachmentOption((option) =>
      option
        .setName("screenshot2")
        .setDescription("A screenshot of the reason")
        .setRequired(false)
    )
    .addAttachmentOption((option) =>
      option
        .setName("screenshot3")
        .setDescription("A screenshot of the reason")
        .setRequired(false)
    )
    .addAttachmentOption((option) =>
      option
        .setName("screenshot4")
        .setDescription("A screenshot of the reason")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("custom")
        .setDescription(
          "Provide a reason for kicking the user (when selecting custom)"
        )
        .setRequired(false)
    ),
  /**
   * @param {ExtendedClient} bot
   * @param {ChatInputCommandInteraction} interaction
   */
  run: async (bot, interaction) => {
    const array = [
      "Violation of Rule 1 - Not respectful, harassment, bullying, racism, sexism, etc.",
      "Violation of Rule 2 - Not obeying staff members, arguing",
      "Violation of Rule 3 - Execessive swearing, towards another user",
      "Violation of Rule 4 - NSFW content (profiles, etc.)",
      "Violation of Rule 5 - Unsafe links, dox, etc.",
      "Violation of Rule 6 - Spam/Mass Ping",
      "Violation of Rule 7 - Not using channels for their correct usage",
      "Violation of Rule 8 - Uncomfortable topics discussed",
      "Violation of Rule 9 - Disruptive in VC",
      "Violation of Rule 10 - Self-promoting, loopholes, underage (joking or not), upsetting others, etc.",
      "Violation of Rule 11 - Punishment evasion",
      "Violation of Rule 12 - Discussing other users' punishments",
      "Violation of Rule 13 - Violation of Discord TOS/Community Guidelines",
    ];

    const { member, guild, options } = interaction;
    await interaction
      .deferReply({ ephemeral: true })
      .catch((err) => console.error);
    const staffServer = bot.guilds.cache.get(process.env.STAFF_SERVER);
    const logChannel = staffServer.channels.cache.get(
      process.env.KICKS_CHANNEL
    );

    const screenshotChannel = staffServer.channels.cache.get(
      process.env.SCREENSHOT_CHANNEL
    );
    const user = options.get("username");
    const custom = options.getString("custom");
    const attachment = options.getAttachment("screenshot");
    const attachment2 = options.getAttachment("screenshot2");
    const attachment3 = options.getAttachment("screenshot3");
    const attachment4 = options.getAttachment("screenshot4");
    const logID = uuid();
    let reason = options.getString("reason");
    if (!array.includes(reason)) reason = custom;
    let attachmentArr = [];

    const targetUser = await interaction.guild.members.fetch(user);

    // Check attachments
    const attachments = [attachment, attachment2, attachment3, attachment4];
    for (let i = 0; i < attachments.length; i++) {
      const currentAttachment = attachments[i];
      if (!currentAttachment || !currentAttachment.contentType) continue;
      if (
        !currentAttachment.contentType ||
        !currentAttachment.contentType.includes("image")
      ) {
        return sendResponse(
          interaction,
          `Attachment type must be an image file (.png, .jpg, etc..)`
        );
      } else {
        attachmentArr.push(currentAttachment);
      }
    }

    // No user
    if (!user) return sendResponse(interaction, "This user doesn't exist!");
    // No reason (custom) provided
    if (reason == null)
      return sendResponse(
        interaction,
        `A custom reason is **required** when selecting the 'Custom' option.`
      );
    // Send
    sendResponse(
      interaction,
      `👢 ${targetUser} forcibly relocated as a precautionary measure. Compliance with protocol enforced. Reason: ${reason}`,
      [],
      [],
      [],
      true
    );
    // Notification (if possible)
    await targetUser
      .send({
        content: `## You have been kicked from ${guild.name}\n> ${reason}`,
      })
      .catch(() => {});
    // Kick the user
    targetUser.kick({ reason });
    // Send SS
    const ssMessage = await screenshotChannel
      .send({ content: logID, files: attachmentArr })
      .catch((err) => console.error(err));

    // Log to channel
    let log = new EmbedBuilder()
      .setColor("Orange")
      .setAuthor({
        name: `${member.user.username}`,
        iconURL: member.user.displayAvatarURL({ dynamic: true }),
      })
      .setDescription(
        `**Member:** ${targetUser} *(${targetUser.id})*
        **Reason:** ${reason}\n ${
          attachment
            ? `\n**Attachment:** ${hyperlink(ssMessage.id, ssMessage.url)}`
            : ""
        }`
      )
      .setFooter({ text: `Kick - ${logID}` })
      .setTimestamp();

    logChannel
      .send({
        embeds: [log],
      })
      .catch((err) => console.error(err));
  },
};

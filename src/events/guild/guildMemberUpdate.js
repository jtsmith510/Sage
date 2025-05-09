const config = require("../../config");
const ExtendedClient = require("../../class/ExtendedClient");
const { EmbedBuilder, AuditLogEvent } = require("discord.js");
const moment = require("moment");
const autoKickBotRole = process.env.AUTO_BOT_ROLE_ID;

module.exports = {
  event: "guildMemberUpdate",
  /**
   *
   * @param {ExtendedClient} bot
   * @param {import('discord.js').Interaction} interaction
   * @returns
   */
  run: async (bot, oldMember, newMember) => {
    const guild = bot.guilds.cache.get(process.env.GUILD_ID);
    console.log(guild);

    const staffServer = bot.guilds.cache.get(process.env.STAFF_SERVER);
    const logChannel = staffServer.channels.cache.get(process.env.MEMBERS);

    if (newMember.guild.id === staffServer.id) return;

    const auditLog = await guild.fetchAuditLogs({
      limit: 1,
      type: AuditLogEvent.MemberRoleUpdate,
    });

    console.log(auditLog);

    const entry = auditLog.entries.first();

    const executor = await guild.members
      .fetch(entry.executor.id)
      .catch(() => {});

    // const entry = await guild
    //   .fetchAuditLogs({ type: "MemberRoleUpdate" })
    //   .then((audit) => audit.entries.first());

    console.log(entry);

    const oldUsername =
      oldMember.nickname || "Original " + "(" + oldMember.user.username + ")";
    const newUsername =
      newMember.nickname || "Original " + "(" + newMember.user.username + ")";

    // Nickname Detector
    if (oldMember.nickname !== newMember.nickname) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: `${newMember.user.username}`,
          iconURL: newMember.user.displayAvatarURL({ dynamic: true }),
        })
        .setDescription(`${newMember} changed their nickname`)
        .setColor("Blue")
        .addFields(
          { name: "Before", value: `${oldUsername}` },
          { name: "After", value: `${newUsername}` }
        )
        .setFooter({ text: `ID: ${newMember.id}` })
        .setTimestamp();

      logChannel.send({
        embeds: [embed],
      });
    }

    // console.log(oldMember)
    // console.log(newMember)

    const roleUpdateEmbed = new EmbedBuilder()
      .setAuthor({
        name: `${executor.user.username}`,
        iconURL: executor.user.displayAvatarURL({ dynamic: true }),
      })
      .setColor("Gold")
      .setFooter({ text: `ID: ${newMember.id}` })
      .setTimestamp();

    // console.log(oldMember.roles.cache)
    // console.log(newMember.roles.cache)
    // console.log(newMember)
    const newRoles = newMember.roles.cache;
    const oldRoles = oldMember.roles.cache;

    const addedRoles = newRoles.filter((role) => !oldRoles.has(role.id));
    const removedRoles = oldRoles.filter((role) => !newRoles.has(role.id));

    const addedRolesString = addedRoles
      .map((role) => "``" + role.name + "``")
      .join("**,** ");
    const removedRolesString = removedRoles
      .map((role) => "``" + role.name + "``")
      .join("**,** ");

    if (addedRoles.has(autoKickBotRole)) {
      console.log(`User ${oldMember.user.tag} has been given the role!`);
    }

    if (newMember.roles.cache.size - oldMember.roles.cache.size == 1) {
      console.log("Only 1 role was given");
    } else if (newMember.roles.cache.size - oldMember.roles.cache.size !== 1) {
      console.log("Multiple roles were given");
    }

    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
      oldMember.roles.cache.forEach((role) => {
        if (!newMember.roles.cache.has(role.id)) {
          if (oldMember.roles.cache.size - newMember.roles.cache.size == 1) {
            roleUpdateEmbed.setDescription(
              `<@${newMember.user.id}> was removed from the role ` +
                "``" +
                role.name +
                "``" +
                `by ${executor}`
            );
          } else if (
            oldMember.roles.cache.size - newMember.roles.cache.size !==
            1
          ) {
            roleUpdateEmbed.setDescription(
              `<@${newMember.user.id}> was removed from the roles ` +
                removedRolesString +
                `by ${executor}`
            );
          }
        }
      });
    } else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
      newMember.roles.cache.forEach((role) => {
        if (!oldMember.roles.cache.has(role.id)) {
          if (newMember.roles.cache.size - oldMember.roles.cache.size == 1) {
            roleUpdateEmbed.setDescription(
              `<@${newMember.user.id}> has been given the role ` +
                "``" +
                role.name +
                "``" +
                `by ${executor}`
            );
          } else if (
            newMember.roles.cache.size - oldMember.roles.cache.size !==
            1
          ) {
            roleUpdateEmbed.setDescription(
              `<@${newMember.user.id}> has been given the roles ` +
                addedRolesString +
                `by ${executor}`
            );
          }
        }
      });
    } else {
      return;
    }

    logChannel.send({
      embeds: [roleUpdateEmbed],
    });
  },
};

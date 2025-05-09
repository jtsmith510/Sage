const ExtendedClient = require("../../class/ExtendedClient");
const Canvas = require("canvas");
const mongoose = require("../../handlers/mongoose");
const dbCleanup = require("../../modules/rankSortCron");
const { ActivityType } = require("discord.js");

module.exports = {
  event: "ready",
  once: true,
  /**
   *
   * @param {ExtendedClient} _
   * @param {import('discord.js').Client<true>} bot
   * @returns
   */
  run: (_, bot) => {
    console.log("Online!");

    const guild = bot.guilds.cache.get(process.env.GUILD_ID);

    Canvas.registerFont("./src/fonts/ulm_grotesk.ttf", { family: "grotesk" });
    Canvas.registerFont("./src/fonts/osaka-re.ttf", { family: "osaka" });
    Canvas.registerFont("./src/fonts/Orbitron-VariableFont_wght.ttf", {
      family: "orbitron",
    });

    bot.user.setActivity({
      type: ActivityType.Custom,
      name: "custom",
      state: `Watching over ${new Intl.NumberFormat().format(
        guild.memberCount
      )} users`,
    });
    setInterval(() => {
      bot.user.setActivity({
        type: ActivityType.Custom,
        name: "custom",
        state: `Watching over ${new Intl.NumberFormat().format(
          guild.memberCount
        )} users`,
      });
    }, 900000);
    // process.setMaxListeners(0)

    mongoose();
    dbCleanup();
  },
};

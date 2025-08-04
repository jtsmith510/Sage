const { readdirSync, readdir } = require("fs");
const ExtendedClient = require("../class/ExtendedClient");
const fetch = require("node-fetch").default;
const axios = require("axios");
const getRandomUA = require("../utils/getRandomUA");

/**
 *
 * @param {ExtendedClient} bot
 */

module.exports = (bot) => {
  const guild = process.env.GUILD_ID;

  setInterval(async () => {
    const { data } = await axios(
      "https://decapi.net/twitch/followcount/itsoasisGG",
      {
        headers: {
          "User-Agent": getRandomUA(),
        },
      }
    );

    function kFormatter(num) {
      const regExp = new RegExp("^-?\\d+(?:.\\d{0," + (1 || -1) + "})?");
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toString().match(regExp)[0] +
            "K"
        : Math.sign(num) * Math.abs(num);
    }

    let followerCount = kFormatter(data);

    let vc = bot.channels.cache.get("1006433607222575155");

    vc.setName(`Twitch: ${followerCount}`).catch((err) =>
      console.error(
        `${path.basename(
          __filename
        )} There was a problem changing the channel follower name: `,
        err
      )
    );
  }, 600000);
};

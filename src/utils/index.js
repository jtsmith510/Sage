const { EmbedBuilder } = require("discord.js");

const rules = [
  `Treat everyone with kindness. Bullying, harassment, and discrimination are not allowed. This includes racism, sexism, homophobia, transphobia, and the use of slurs or offensive language.`,
  `Staff members are here to help. If you disagree with a decision, reach out to a moderator privately in a respectful way. Public arguments with staff are not allowed. __Please avoid mini-modding and do not ping staff unless necessary.__`,
  `Do **__NOT__** post or share anything sexual, graphic, or otherwise inappropriate. This includes images, videos, links, usernames, nicknames, emojis, or messages. Remember that some members may be minors or uncomfortable with certain topics.`,
  `Do not share your own or anyone else’s real-life personal information. Posting unsafe links, scams, or anything intended to collect personal data will result in an immediate ban.`,
  `Do not spam messages, emojis, or pings. Avoid pinging large groups, other creators, or the server management unless it is truly important.`,
  `Please keep each channel on topic. For example, use the <#903523421042929674> for bot commands. This helps keep the server organized.`,
  `Do not start conversations that are likely to make others uncomfortable. This includes self-harm, intense political or religious debates, extreme sexual discussions, cheating or hacks in games, and illegal topics like account selling.`,
  `Voice channels should be used responsibly. Do not spam join/leave, play loud noises, scream, or use soundboards in a disruptive way.`,
  `Do not advertise your content or server without staff permission. Do not try to bend or find loopholes in the rules. Joking about being under 13 or trying to confuse others to avoid consequences is not allowed.`,
  `Using alternate accounts to get around punishments is not allowed. Doing so will extend the punishment on your main account.`,
  `Do not ask about or talk publicly about other members’ bans, mutes, or warnings. Do not make fun of or target muted members.`,
  `Please make sure you follow the [Discord TOS](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines). Failure to comply to these terms may get your account terminated!`,
];

module.exports = {
  rule1: [`${rules[0]}`],
  rule2: [`${rules[1]}`],
  rule3: [`${rules[2]}`],
  rule4: [`${rules[3]}`],
  rule5: [`${rules[4]}`],
  rule6: [`${rules[5]}`],
  rule7: [`${rules[6]}`],
  rule8: [`${rules[7]}`],
  rule9: [`${rules[8]}`],
  rule10: [`${rules[9]}`],
  rule11: [`${rules[10]}`],
  rule12: [`${rules[11]}`],

  //     rules: [
  //         `

  // > **Rule 1:** ${rules[0]}
  // > **Rule 2:** ${rules[1]}
  // > **Rule 3:** ${rules[2]}
  // > **Rule 4:** ${rules[3]}
  // > **Rule 5:** ${rules[4]}
  // > **Rule 6:** ${rules[5]}

  // `
  //     ],

  //     rules2: [
  //         `
  // > **Rule 7:** ${rules[6]}
  // > **Rule 8:** ${rules[7]}
  // > **Rule 9:** ${rules[8]}
  // > **Rule 10:** ${rules[9]}
  // > **Rule 11:** ${rules[10]}
  // > **Rule 12:** ${rules[11]}
  // > **Rule 13:** ${rules[12]}
  // *last updated: <t:${Math.round(new Date() / 1000)}:R>*`
  //     ]
};

const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
    AttachmentBuilder,
    Colors,
    Embed,
  } = require("discord.js");
  const index = require('../../../utils/index')
  const ExtendedClient = require("../../../class/ExtendedClient");
  const wait = require('node:timers/promises').setTimeout;
  const colors = require('../../../colors.json');
const config = require("../../../config");
const avatar = require("../../context/user/avatar");

  module.exports = {
    structure: new SlashCommandBuilder()
      .setName("index")
      .setDescription("Pre-written Content")
      .addStringOption((option => 
        option
            .setName('data')
            .setDescription('Data to send')
            .addChoices(
                { name: "rules", value: "rules" },
                { name: "faq", value: "faq" },
                { name: "roles", value: "roles"},
                { name: "support", value: "support"},
                { name: "packs", value: "packs" },
            )
            .setRequired(true)
        )),
    options: {
      developers: true,
    },
    /**
     * @param {ExtendedClient} bot
     * @param {ChatInputCommandInteraction} interaction
     */
    run: async (bot, interaction) => {
        let { guild, channel, options } = interaction;

        const avatarURL = bot.user.avatarURL({ format: 'png', size: 256 });

        await interaction.deferReply({ ephemeral: true })

        const attachment = new AttachmentBuilder('../../../images/rules.png', { name: "rules.png" })

        const rule1 = new EmbedBuilder()
            .setAuthor({ name: "Rule 1", iconURL: "https://i.imgur.com/ExVt149.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule1[0]}`)
        const rule2 = new EmbedBuilder()
            .setAuthor({ name: "Rule 2", iconURL: "https://i.imgur.com/i00Y6On.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule2[0]}`)
        const rule3 = new EmbedBuilder()
            .setAuthor({ name: "Rule 3", iconURL: "https://i.imgur.com/QBTM5e0.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule3[0]}`)
        const rule4 = new EmbedBuilder()
            .setAuthor({ name: "Rule 4", iconURL: "https://i.imgur.com/fyyhitM.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule4[0]}`)
        const rule5 = new EmbedBuilder()
            .setAuthor({ name: "Rule 5", iconURL: "https://i.imgur.com/V8HGI92.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule5[0]}`)
        const rule6 = new EmbedBuilder()
            .setAuthor({ name: "Rule 6", iconURL: "https://i.imgur.com/DADmfaU.jpg" })
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule6[0]}`)
        const rule7 = new EmbedBuilder()
            .setAuthor({ name: "Rule 7", iconURL: "https://i.imgur.com/Ydz2tUy.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule7[0]}`)
        const rule8 = new EmbedBuilder()
            .setAuthor({ name: "Rule 8", iconURL: "https://i.imgur.com/fRZznc4.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule8[0]}`)
        const rule9 = new EmbedBuilder()
            .setAuthor({ name: "Rule 9", iconURL: "https://i.imgur.com/rb8tUoA.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule9[0]}`)
        const rule10 = new EmbedBuilder()
            .setAuthor({ name: "Rule 10", iconURL: "https://i.imgur.com/zewbedC.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule10[0]}`)
        const rule11 = new EmbedBuilder()
            .setAuthor({ name: "Rule 11", iconURL: "https://i.imgur.com/E77a9nu.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule11[0]}`)
        const rule12 = new EmbedBuilder()
            .setAuthor({ name: "Rule 12", iconURL: "https://i.imgur.com/frzALHM.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule12[0]}`)
        const rule13 = new EmbedBuilder()
            .setAuthor({ name: "Rule 13", iconURL: "https://i.imgur.com/o6VPP4p.jpg"})
            .setColor(colors.RULESEMBED)
            .setDescription(`${index.rule13[0]}`)
        const information = new EmbedBuilder()
            .setAuthor({ name: "Information", iconURL: "https://i.imgur.com/jn8YaUK.png" })
            .setColor("DarkButNotBlack")
            .setDescription('If you wish to report a member for breaking one of these rules, please feel free to create a ticket in <#903739112027197441>!\n\nThese rules are not exhaustive, if a staff member tells you not to do something, listen to them. If you want more clarification, or think something is wrong, please open a ticket in <#903739112027197441>.\n\nClick: [Get Roles](https://discord.com/channels/755968485854675065/903524741791506432/903759194941968414) **|** [FAQ](https://discord.com/channels/755968485854675065/903762303026085939) **|** [Chat](https://discord.com/channels/755968485854675065/903516143715778590)')
            .setFooter({ text: `${config.messageSettings.signature}` })

            let faq1 = '**About**\n\nAge: 20\nPronouns: She/Her\nFavorite Colors: Pastel blue, pastel pink, sky blue, aqua, and black\nFavorite Mainstream Music Artists: Juice WRLD, The Kid LAROI, Post Malone, YENA, Sleeping With Sirens, Kellin Quinn, and Bring Me The Horizon.\nFavorite Mainstream Song: The Kid LAROI - Stay (ft. Justin Bieber)\nFavorite Games: Minecraft, Super Smash Bros. Ultimate, and **TONS of Sonic games.**\nFavorite Sonic Song(s): "Reach For The Stars" from Sonic Colors, "I\'m Here: Revisited" from Sonic Frontiers, "Undefeatable" from Sonic Frontiers, and "Knight of The Wind" from Sonic and The Black Knight\n\n'
            let faq2 = "**Boundaries**\n\n**[⚠️]** [**OFFICIAL** Boundaries](https://oasisyt.carrd.co/)"
            let faq3 = "**Controls/DPI/Sens**\n\nDPI: 400\nMC Sens: 91\nFOV: 70 (1.8) + Dynamic FOV On\nFOV: 90 (1.21) + Dynamic FOV Off\n\n**__Controls:__**\nDrop Item: C\nMove: WASD\nInventory: E\nOptifine/Lunar Zoom: X\nPerspective Mod: ALT\nSprint: CTRL\nOffhand (1.21): V\nThird Person: Side Mouse Button 2\nHotbar: 1 - 5 are defualt\n- 6: Q\n- 7: F\n- 8: R\n- 9: Side Mouse Button 1\n\n(1.7) View Bobbing: On\n(1.8 & 1.21+) View Bobbing: Off\n\n"
            let faq4 = "**Mouse/Keyboard**\n\nMouse: Logitech G Pro Wireless Superlight\nKeyboard: A custom made keyboard by MinuteTech\n\n"
            let faq5 = "**How do I apply for <@&756952143776186460> or <@&896080274134286337> role?**\n\nRun </info:1220542774705655829> in <#903523421042929674> to see info\n\n"
            let faq6 = "**When is the next Discord/Minecraft event or competition?**\n\nWe currently do not have a fixed events schedule, so please just keep an eye out in ⁠<#903529298969907221> for regular updates on the next Community event.\n\n"
            let faq7 = "**Can I apply to be a member of Staff on the Discord server?**\n\nYou will be able to apply for a Staffing position whenever Staff Applications are open. When they are open, you will receive a notification in <#903524236524675102> where you can then fill in an application form. If Staff Applications are not open, you will not be able to apply for a staff role.\n\n"
            let faq8 = "**Can I record a video with Oasis (Swiftblade)?**\n\nSadly, you cannot. Oasis (Swiftblade) has a very busy schedule and would rather be left undisturbed.\n\n"
            let faq9 = "**Can I ping Oasis (Swiftblade) or a Creator?**\n\nNo. If you do, you will be punished. Please read the ⁠<#756718628207984760> for a thorough understanding.\n\n"
            let faq10 = '**What resourcepack did Oasis (Swiftblade) use in Vitalasy\'s "I Built a Bedrock Prison in Survival Minecraft" video?**\n\nShadow 16x by Aedo\n\n'
            let faq11 = "**What Minecraft client does Oasis use?**\n\n__1.21__:\n- Lunar Client\n- Fabric\n\n__1.8__:\n- Lunar Client\n- Forge (for thumbnails only)\n\n__1.7__:\n- Lunar Client\n- Cheatbreaker Client\n\n"
            let faq12 = "**What Minecraft version and gamemodes does Oasis primarily play for PvP?**\n\nOasis mostly plays pvp on 1.7/1.8, but she plays 1.21 pvp as well.\n\n1.7: Nodebuff, Boxing, and BuildUHC (Minemen Club)\n1.8: Skywars, Duels, and rarely Bedwars (Hypixel)\n1.21: Netherpot, OP, Sword, and Lifesteal UHC\n\n"
            let faq13 = "**What does Oasis use for recording/editing/thumbnails?**\n\nRecording: OBS\nEditing: Adobe Premiere Pro, Sony Vegas, After Effects, and ReplayMod for Minecraft\nThumbnails: Photoshop, and CustomNPCs Mod for Minecraft\n\n"
            let faq14 = "**Who made the Discord server icon and banner?**\n\nCurrent server icon: N/A\n\nCurrent server banner: Sonic Team\n\nCurrent <@1004762780508880986> pfp: @kur0na._.\n\n"
            let faq15 = "**I have a question relating to Oasis and Lifesteal...?**\n\nOasis made an FAQ for that in [this tweet](https://twitter.com/ItsOasisMC/status/1600916557651218476?t=Sqq15_E9b1WdqPSRV38qRA&s=19)\n\nNote: This mostly applies to Seasons 1 and 2. This may likely change in the future.\n\n"
            let faq16 = "**How does Oasis (Swiftblade) have her renders in videos? (motion blur, smooth gameplay, etc)**\n\nShe records her videos at 240FPS or 360FPS using OBS depending on the footage needed and what game is being recorded (Minecraft or a Sonic game). This is then rendered into 60FPS in Sony Vegas Pro with special settings and a LUT filter that changes the color space format. The final rendered footage is then imported into Adobe Premiere Pro (or After Effects) to be edited. The quality of the final 4K resolution video is usually professional grade with external software used (that's a secret!).\n\n"
            let faq17 = "**Why is Oasis also known as Swiftblade?**\n\nSwiftblade is the name of her OC (original character) and the name of her 2nd YouTube channel."

            const faq1embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 1", iconURL: `${process.env.FAQ1Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq1)

                const faq2embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 2", iconURL: `${process.env.FAQ2Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq2)
                
                const faq3embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 3", iconURL: `${process.env.FAQ3Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq3)

                const faq4embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 4", iconURL: `${process.env.FAQ4Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq4)

                const faq5embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 5", iconURL: `${process.env.FAQ5Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq5)

                const faq6embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 6", iconURL: `${process.env.FAQ6Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq6)

                const faq7embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 7", iconURL: `${process.env.FAQ7Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq7)

                const faq8embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 8", iconURL: `${process.env.FAQ8Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq8)

                const faq9embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 9", iconURL: `${process.env.FAQ9Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq9)

                const faq10embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 10", iconURL: `${process.env.FAQ10Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq10)

                const faq11embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 11", iconURL: `${process.env.FAQ11Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq11)

                const faq12embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 12", iconURL: `${process.env.FAQ12Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq12)

                const faq13embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 13", iconURL: `${process.env.FAQ13Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq13)

                const faq14embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 14", iconURL: `${process.env.FAQ14Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq14)

                const faq15embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 15", iconURL: `${process.env.FAQ15Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq15)

                const faq16embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 16", iconURL: `${process.env.FAQ16Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq16)

                const faq17embed = new EmbedBuilder()
                .setAuthor({ name: "FAQ 17", iconURL: `${process.env.FAQ17Icon}`})
                .setColor(colors.RULESEMBED)
                .setDescription(faq17)


        switch (options.getString('data')) {
            case 'rules': {
                channel.createWebhook({ name: bot.user.username, avatar: `${avatarURL}` }).then(webhook => {
                    webhook.send({
                        files: ["./src/images/rules.png"]
                    })
                    setTimeout(() => {
                        webhook.send({
                            embeds: [new EmbedBuilder().setAuthor({ name: "Welcome!", iconURL: "https://i.imgur.com/z3Ppq8B.png"}).setColor("DarkButNotBlack").setDescription(`Welcome to **Oasis's (Swiftblade's)** Official Discord Server! Please ensure that you follow these simple rules.\n\nPlease keep this server to English & Spanish only.`)],
                            allowedMentions: {
                                parse: []
                            }
                        })
                    }, 2000)

                    setTimeout(() => {
                        webhook.send({
                            embeds: [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10],
                            allowedMentions: {
                                parse: []
                            }
                        })
                    }, 3000)
                    setTimeout(() => {
                        webhook.send({
                            embeds: [rule11, rule12, rule13, information],
                            allowedMentions: {
                                parse: []
                            }
                        })
                    }, 4000)
                    setTimeout(() => {
                        webhook.send({
                            content: `*last updated: <t:${Math.round(new Date() / 1000)}:R>*`
                        })
                    }, 6000)


                })
            }
            break;

            case 'faq': {
                let initMessage = []
                channel.createWebhook({ name: bot.user.username, avatar: `${avatarURL}`}).then(webhook => {
                    webhook.send({
                        files: ["./src/images/FAQoasis.jpg"]
                    })

                    setTimeout(() => {
                        webhook.send({
                            embeds: [faq1embed, faq2embed, faq3embed, faq4embed, faq5embed, faq6embed, faq7embed, faq8embed, faq9embed, faq10embed]
                        })
                    }, 4000)

                    setTimeout(() => {
                        webhook.send({
                            embeds: [faq11embed, faq12embed, faq13embed, faq14embed, faq15embed, faq16embed, faq17embed]
                        })
                    }, 5000)
                //     setTimeout(() => {

                    
                //     for (let i = 0; i < faqArr.length; i++) {
                //         setTimeout(async function() {
                //             const message = await webhook.send({
                //                 content: `${faqArr[i]}`,
                //                 allowedMentions: {
                //                     parse: []
                //                 }
                //             })
                //             initMessage.push(message.url);
                //             if (i === faqArr.length - 1) webhook.send({
                //                 content: `[Jump to top](${initMessage[0]})`
                //             })
                //         }, i * 1000);
                //     }
                // }, 3000)

                setTimeout(() => {
                    webhook.send({
                        content: `*last updated: <t:${Math.round(new Date() / 1000)}:R>*`
                    })
                }, 20000)
                })
            }
            break;
            case "roles": {
                const embed12 = new EmbedBuilder()
                    .setColor(colors.TRANSPARENT)
                    .setDescription('**⌜   Staff Roles  ⌝**\n\n<@&756723869699670016> ▸ The one and only <:oasissunglassescool:1060144825090969620>\n<@&825974296663818250> ▸ The manager of the discord\n<@&934810508698214470> ▸ Veteran server admin trusted with server development\n<@&756950808427364392> ▸ The administrators of the discord\n<@&757838930770001940> ▸ The moderators of the discord who ensure that all server rules are being followed\n<@&756950810578911372> ▸ Members that are being evaluated to become apart of the staff team\n<@&1214414694526222371> ▸ Oasis\'s custom bot coded by <@274021702411747328>!\n<@&903745069209751604> ▸ The moderators of Oasis\'s Twitch. **For discord related issues, do not contact twitch staff.**\n\n**⌜   Exclusive Roles  ⌝**\n\n<@&870057943398248478> ▸ Oasis\'s most notable members (usually from 2019 or prior) **Do not ask for this role.**\n<@&899003484949586020> ▸ The most recent winner of an event or tournament hosted previously\n<@&903745076398805082> ▸ For those who have made amazing fanart!\n<@&869916474448441405> ▸ For those that nitro boost the server\n\n**⌜   Leveling Roles  ⌝**\nThese roles depend on your <@1011139072355483693> bot **</rank:1215398887834124360>**! The more active you are on the server, the more XP you gain to contribute towards your server level, making you move up a role!\n\n<@&756954432364609636> ▸ The basic starter rank granted upon joining.\n<@&757759380656750652> ▸ Granted at level 5\n<@&756953620288766074> ▸ Granted at level 10 **(Grants media perms)**\n<@&756953619882049616> ▸ Granted at level 15\n<@&756953619626197032> ▸ Granted at level 20\n<@&756953618896388126> ▸ Granted at level 25 **(Grants nickname perms)**\n<@&870113342222635049> ▸ Granted at level 30\n<@&870113470488670228> ▸ Granted at level 35\n<@&870113567377092618> ▸ Granted at level 40 **(Grants exclusive chat perms)**\n<@&903161806690877460> ▸ Granted at level 45\n<@&903162332593664030> ▸ Granted at level 50\n<@&903162402038759454> ▸ Granted at level 55\n<@&1048795955824185414> ▸ Granted at level 60\n<@&1048796299316695080> ▸ Granted at level 65\n<@&1048797646594248755> ▸ Granted at level 70\n<@&1048798284505956372> ▸ Granted at level 75\n<@&1214641008894279811> ▸ Granted at level 80\n<@&1048797870251327558> ▸ Granted at level 85 (There\'s no way you\'re gonna get this one...)')
                    .setFooter({ text: `${config.messageSettings.signature}` })
                
                channel.createWebhook({ name: bot.user.username, avatar: `${avatarURL}`}).then(webhook => {
                    webhook.send({
                        files: ["./src/images/OASISroles.jpg"]
                    })
                    setTimeout(() => {
                        webhook.send({
                            embeds: [embed12],
                            allowedMentions: {
                                parse: []
                            }
                        })
                    }, 2000)
                    setTimeout(() => {
                        webhook.send({
                            content: `*last updated: <t:${Math.round(new Date() / 1000)}:R>*`
                        })
                    }, 4000)

                })
            }
            break;
            case "support": {
                const embed1 = new EmbedBuilder()
                    .setColor("Red")
                    .setDescription('**__Welcome to our Support Center!__**\n\nHere you can do the following:\n\n**File a Report:**\n\n- Report other members for violating our rules.\n- Report other members for violating Discord\'s Terms of Service (this includes reporting anyone who is under the age of 13).\n- Report a loophole in our chat filter.\n- Report a problem regarding <@1011139072355483693> or other <@&904578360485773382>\n- Report a member for harassing or bullying you or another member.\n\n**Get Support**\n\n- Appeal to clear a warning or mute.\n- Appeal on behalf of someone else to lift a ban.\n- Apply for <@&756952143776186460> or <@&896080274134286337>\n- Clear any other questions you may have.\n\n**Other**:\n\n- If you wish to report a member of <@&756723889278812221> for misconduct, please directly message an admin+ that is not the person you wish to make a complaint about.\n\n**Things to Remember:**\n\n- Please wait up to a couple of hours for a response, although we will strive to answer your ticket as soon as possible.\n- Please do not open tickets end-on-end or they may be closed automatically. Only open a ticket for serious business and do not open tickets extremely often.\n- Please do not message a member of staff asking about when your ticket will be answered. They will all be answered eventually! <3\n- Chat filters are still enabled in ticket channels, so keep things PG13.\n- If you are muted you are able to speak here, but please do not abuse this freedom.\n- One subject per ticket. No more please.\n- Please utilise the format provided below when you send your first message.')

                const embed2 = new EmbedBuilder()
                    .setColor("Orange")
                    .setDescription('**Things to Include:**\n\nIf you are reporting someone else, please make sure that you have provided:\n\nTheir User ID (please see this video if you need help finding the ID, [click here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))\n- A **Message Link** that we can refer to (if applicable)\n- **Evidence** in the form of screenshots or other media (if applicable)\n\n**__Abusing this system, creating troll tickets or filing false reports will all result in an instant ban.__**\n\n⚠️ Please read all of the information above thoroughly before opening a ticket or your ticket may be revoked and closed! ⚠️\n\n📌 **REMINDER:** Do not open a ticket for no reason. Tickets that are left empty will be automatically deleted. Read through ⁠<#903762303026085939> first for any common questions you may have.\n\n⚠️ **- REMEMBER:** When applying for a YouTube/creator role, please review the requirements in <#903524420826591272> and question 5 in <#903762303026085939> before opening a ticket.')

                const embed3 = new EmbedBuilder()
                    .setColor("Green")
                    .setDescription('Before opening a ticket, please review the information above. \n\n✅ - To open a ticket, click the "📩 Create ticket" button below!')
                    .setFooter({ text: `${config.messageSettings.signature} `})
                
                    channel.createWebhook({ name: bot.user.username, avatar: `${avatarURL}`}).then(webhook => {
                        webhook.send({
                            files: ["./src/images/supportOASIS.jpg"]
                        })

                        setTimeout(() => {
                            webhook.send({
                                embeds: [embed1, embed2, embed3],
                                allowedMentions: {
                                    parse: []
                                }
                            })
                        }, 2000)
            }
        )}
        break;
        case "packs": {
            // Pack 1 Information
        let pack1_title = "ItsOasis Animated [16x] - 800 Pack"
        let pack1_version = "1.8"
        let pack1_maker = "Niotic"
        let pack1_released = "August 2019"
        let pack1_link = "http://pack1.istaythatway.com"
        let pack1_thumbnail = "https://i.imgur.com/bnsRgyY.jpg"

        // Pack 2 Information
        let pack2_title = "Lazuli [16x] - 2,000 Pack"
        let pack2_version = "1.8"
        let pack2_maker = "Niotic"
        let pack2_released = "December 2019"
        let pack2_link = "http://pack2.istaythatway.com"
        let pack2_thumbnail = "https://i.imgur.com/izlFZM8.png"

        // Pack 3 Information
        let pack3_title = "Aquarius [16x] - 3,000 Pack"
        let pack3_version = "1.8"
        let pack3_maker = "Niotic"
        let pack3_released = "June 2020"
        let pack3_link = "http://pack3.istaythatway.com"
        let pack3_thumbnail = "https://i.imgur.com/2SFUcL7.png"

        // Pack 4 Information
        let pack4_title = "Oasisfault [16x] - 5,000 Pack"
        let pack4_version = "1.8 & 1.18"
        let pack4_maker = "Miko"
        let pack4_released = "April 2021"
        let pack4_link1 = "http://pack4a.istaythatway.com"
        let pack4_link2 = "http://pack4b.istaythatway.com"
        let pack4_thumbnail = "https://i.imgur.com/i23a4Gf.png"

        let embedTitle = new EmbedBuilder()
        .setTitle("◈ Pack Releases ◈")
        .setColor(colors.MUSIC)

        let pack1embed = new EmbedBuilder()
            .setTitle(pack1_title)
            .setImage(pack1_thumbnail)
            .setColor(colors.blue_light)
            .addFields(
                { name: "Version", value: `${pack1_version}`},
                { name: "Pack Maker", value: `${pack1_maker}`},
                { name: "Released", value: `${pack1_released}`},
                { name: "Download:", value: `${pack1_link}`}
            )
            .setFooter({ text: `${config.messageSettings.signature}` })

        let pack2embed = new EmbedBuilder()
            .setTitle(pack2_title)
            .setImage(pack2_thumbnail)
            .setColor(colors.blue_light)
            .addFields(
                { name: "Version", value: `${pack2_version}`},
                { name: "Pack Maker", value: `${pack2_maker}`},
                { name: "Released", value: `${pack2_released}`},
                { name: "Download:", value: `${pack2_link}`}
            )
            .setFooter({ text: `${config.messageSettings.signature}` })

        let pack3embed = new EmbedBuilder()
            .setTitle(pack3_title)
            .setImage(pack3_thumbnail)
            .setColor(colors.blue_light)
            .addFields(
                { name: "Version", value: `${pack3_version}`},
                { name: "Pack Maker", value: `${pack3_maker}`},
                { name: "Released", value: `${pack3_released}`},
                { name: "Download:", value: `${pack3_link}`}
            )
            .setFooter({ text: `${config.messageSettings.signature}` })

        let pack4embed = new EmbedBuilder()
            .setTitle(pack4_title)
            .setImage(pack4_thumbnail)
            .setColor(colors.blue_light)
            .addFields(
                { name: "Version", value: `${pack4_version}`},
                { name: "Pack Maker", value: `${pack4_maker}`},
                { name: "Released", value: `${pack4_released}`},
                { name: "Download: (1.8)", value: `${pack4_link1}`},
                { name: "Download: (1.18)", value: `${pack4_link2}`}
            )
            .setFooter({ text: `${config.messageSettings.signature}` })
        

        channel.createWebhook({ name: bot.user.username, avatar: `${avatarURL}`}).then(webhook => {
            webhook.send({
                embeds: [embedTitle, pack1embed, pack2embed, pack3embed, pack4embed]
            })

            setTimeout(() => {
                webhook.send({
                    content: `*last updated: <t:${Math.round(new Date() / 1000)}:R>*`
                })
            }, 4000)

        })

        }

    }}}

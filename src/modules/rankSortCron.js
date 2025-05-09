const { dbUpdateOne, dbDeleteOne } = require('../utils/utils');
const rankSchema = require('../schemas/rank-schem');
const { CronJob } = require('cron');
const axios = require('axios');

module.exports = (bot) => {
    const guild = bot?.guilds?.cache?.get(process.env.GUILD_ID);

        // Fetch all rank entries sorted in descending order based on their 'xp', remove non-existent users and assign their new rank position - runs once per day (12:00)
        const rankSort = new CronJob('0 12 * * *', async function () {
            const results = await rankSchema.find().sort({ xp: -1 });
            let currentPosition = 0;
            let newPositionArr = [];
            for (const data of results) {
                const { userId } = data;
                // Remove non-existent users from the database
                currentPosition++;
                const exists = await guild.members.fetch(userId).catch(() => console.log(`Found and removed a user in the rank system that no longer exists`));
                if (!exists) await dbDeleteOne(rankSchema, { userId: userId });
                // Set each user's current rank position
                newPositionArr.push({ pos: currentPosition, userId: userId });
            }
            // Assign the new rank position to each user
            for (let i = 0; i < newPositionArr.length; i++) {
                await dbUpdateOne(rankSchema, { userId: newPositionArr[i].userId }, { rank: newPositionArr[i].pos });
            }
        });
    

        rankSort.start();
}

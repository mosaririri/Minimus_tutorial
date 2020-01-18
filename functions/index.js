import { https } from 'firebase-functions';

// environment variables
require('dotenv').config();

export const tweets = https.onCall(async (body, context) => {
    try {
        const Twitter = require('twitter');
        const client = new Twitter({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });
        const params = {q: body.q, count: 10};
        return await new Promise((resolve, reject) => {
            client.get('search/tweets', params, function(error, tweets, response) {
                if (!error){
                    return resolve(tweets);
                } else {
                    return reject(error);
                }
            });
        });
    } catch(e) {
        console.error(e);
    }
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

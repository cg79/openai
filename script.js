import {config} from 'dotenv'
config();

import {Configuration, OpenAIApi} from 'openai';

console.log('start ', process.env.API_KEY);


const openAi = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

openAi.


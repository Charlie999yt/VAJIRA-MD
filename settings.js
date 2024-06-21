const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'SAKURA-MD|-WA-BOT™';
const FOOTERNAME = '> ＶＡＪＩＲＡ -  ＭＤ - Ｖ4';
global.owner = process.env.OWNER_NUMBER  || '919556416715' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05LK2tYeHRxcFZnWUtabmdZZkw0RWl6dU5PTXUyR2szRDBjUmxOdXhVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1Q2eVdtcTAxdlpHb1FzNDRNSzdvWlA5dWxjNWwrdzF4SEwrOG5TVG15TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUHFvMFgxQ2NNbHFXUGNOY0dqQ1U4ZkEzWU8vRE1RK05YemU4Mm82RkdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSWFKWnEvVlZtYksyNzV4TjZpbmdiUFhLaWhzQU9ISzFEcmk2VFlaeDBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEdWs1K3htRFZFYi9taE5Kdjd5eUxhdU8vNFI0aUdhMlpwTXNQbDBta2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFnL3AwQnZyQjBHallYUXRuN2JuUUhiQjk3d2w3M2lmTmc3SnpaNEZ5REk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURYL2ovTVQxRnlPN2xOOGVuS3FReERiS3dSMlZ4aXlIME9qVFRqZENrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnNsZGQ2d1phaW9MOUFqZ0xYNnd2N3o5SThySzJrOUFYbEZSMU5GVDNDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJSRnRvSk0vbWRaRHdkZDgyQjlFTjQ3UTVuUnRWTkFOWGpYcWhlbmNVaXV6bWt5QmJib3FqUlpkV2hRSU53WUMxQmp0MmY1aU5saDZrTVBOcGNvMmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6InR3Qjh3Q0w5R3kvL1ZkZThaQ3RPRnpkRGw4ZWNiWnk3aFFmRHNQNld0VU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTc2NzNGRUQxRDdCQ0YyRUU0RTA5RjIxMjA1N0JCRDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTA5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjIwQzM0RjQ3RTAzNjYzOTU3Njc5MERBNzc1MEM0ODUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTA5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTAwQTIxOTQ1N0FDMzRBODI2RDM5OUI0RUIzREQ2QjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTEwMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg0NTkwNjg4NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjFFMzVEQUQxQTg0NkQ4Njc1REVFQ0UzREIzQzBBMkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4OTEwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWTJUSDlFMFpUemFURHhWdnNzdzNoUSIsInBob25lSWQiOiI1NzJmZGRlMi1kMjA0LTQxNGItOWZkMS1lNmU4NWQ5MWQ0YTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielpwUC8rZTFqSTAwRVNjTjMwVk1EVEVVTnA4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPREJMT0UyeFMvYU1VNnRJQUxmU0l1S0J3UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJROVE1U0QyQSIsIm1lIjp7ImlkIjoiNDg0NTkwNjg4NzQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtYXJpYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTExxbnRzQkVKemkxck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWDZ1NEl3Nk9BdXF3Ymk1TURCaHpYKzcyRTRTWlpzRjR6bjA5Rm10blpROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR1BvUVllWnVqWmVxQlNqU1YzekdQazNxRnhTYXJPdllITnVZbUtUTWEzMWwyM3huNzNUK0dSODNwdTdZWDVvZzQ4eTRBcmhJQjVFZm9MSTRVRng1QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjdFRFdnWFJmTVBuV21jdVMyTjRxRkR3b0QzcWowYnJGalQzbENiY3FpUHI0alg3OEkwOFRrc1p5M0tCcUlhZTM2ZnVRUXE3SUx4WmdDSFF3bWp2TmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDg0NTkwNjg4NzQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWK3J1Q01PamdMcXNHNHVUQXdZYzEvdTloT0VtV2JCZU01OVBSWnJaMlVQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4OTg5MDk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh3USJ9' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "919556416715,919556416715" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'CHARLIE' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fnaruto%2Fimages%2F6%2F64%2FSakura_Part_1.png%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20170726101444&tbnid=2G33C2l31B-TDM&vet=1&imgrefurl=https%3A%2F%2Fnaruto.fandom.com%2Fwiki%2FSakura_Haruno&docid=x6k4-1vsD5-qIM&w=1200&h=897&hl=en-IN&source=sh%2Fx%2Fim%2Fm6%2F4&kgs=ec7712250b00e3b5&shem=abme%2Ctrie` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '‌👨‍💻 SAKURA - ＭＤ - Ｖ5 👨‍💻',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'SI' ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || false  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};

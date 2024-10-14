const axios = require('axios');
const { text } = require('cheerio');
const ACCESS_TOKEN = process.env.GM_TOKEN 
const ACCESS_TOKEN1 = process.env.GM_TOKEN1
const ACCESS_TOKEN2 = process.env.GM_TOKEN2
const ACCESS_TOKEN3 = process.env.GM_TOKEN3
const ACCESS_TOKEN4 = process.env.GM_TOKEN4
const ACCESS_TOKEN5 = process.env.GM_TOKEN5
const ACCESS_TOKEN6 = process.env.GM_TOKEN6
const ACCESS_TOKEN7 = process.env.GM_TOKEN7
const { v4: uuidv4 } = require('uuid');
const uniqueGUID = uuidv4(); //generates new guid

images = [
    'https://i.groupme.com/626x512.png.a3e5543147e24446b9aaf90ee44d1312',
    'https://i.groupme.com/750x646.png.c9f9d120ac3748ed80277b3e434c989c',
    'https://i.groupme.com/688x588.png.0a56c7996ae444cf8da83f4416172fe5',
    'https://i.groupme.com/686x567.png.d1eb3128535c4f589219105082aff438',
    'https://i.groupme.com/687x622.png.b182b331263d40b983512fbc563de2ab',
    'https://i.groupme.com/691x580.png.03a28824825949a2b4d2abd4182d0023',
    'https://i.groupme.com/692x642.png.40d34a96342d4fccac2783fa1bdb2a8d',
    'https://i.groupme.com/686x592.png.ae9b4d6031a8413fac7ed8ca67315966',
    'https://i.groupme.com/690x626.png.c745c2d10ff54b0db7a7925b3d4522d1',
    'https://i.groupme.com/693x625.png.3f18e9ecdcc141d5bb905610d5eb0915',
    'https://i.groupme.com/690x547.png.5ae37c83666c4196baec7acbb8bbdaa6',
    'https://i.groupme.com/687x632.png.1c617f824d0a4f79945f355616548108',
    'https://i.groupme.com/686x702.png.4d7475b5c4ef4763897553c7ae2d4f47',
    'https://i.groupme.com/687x658.png.3c69ade656c14e819f381807225aed21',
    'https://i.groupme.com/686x661.png.5a39980878574123ad4e43e55aeec715',
    'https://i.groupme.com/536x492.png.2127609cea1e408b850aea09de5aaef4',
    'https://i.groupme.com/693x628.png.416ff2add6674b1abd0a43433741a366',
    'https://i.groupme.com/688x668.png.420a4f0043e84e14b633eb13a50dda0f',
    'https://i.groupme.com/691x585.png.ca56e47023d2492e87e08d2367b49883',
    'https://i.groupme.com/672x600.png.3fecd47f96dc43189163c6ef5b4125c8',
    'https://i.groupme.com/687x675.png.7a966313fdc947b891d60361cc924efa',
    'https://i.groupme.com/690x625.png.468953a70bda49eaa7e5b00ae5c65488',
    'https://i.groupme.com/690x646.png.66b3e17a9ee447bcb650ff8024f53e40',
    'https://i.groupme.com/688x636.png.a5e54ea691614864a7c2ca5087ffcd4b',
    'https://i.groupme.com/685x616.png.c9a38e1ce6fa4694bf890a5e313d2fca',
    'https://i.groupme.com/690x622.png.791abf5d399540babb758387c66aa535',
    'https://i.groupme.com/682x601.png.4731ae0955d943f49fcfbfeb30f98e5c'
  ]

async function sendMessage(text, groupID) {
    try {
        const response = axios.post(`https://api.groupme.com/v3/groups/${groupID}/messages`, {
            message: {
                source_guid: uuidv4(),
                text: text
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Token': ACCESS_TOKEN
            }
        })
        console.log(`Sent Message to ${groupID} : ${text}`)
        return response.data
    } catch(error) {
        console.log("ERROR")
        throw error
    }
}

async function getGroupIds(size) {
    try {
        const response = await axios.get('https://api.groupme.com/v3/groups', {
            params: {
              omit: 'memberships',
              per_page: size
              
            },
            headers: {
              'X-Access-Token': ACCESS_TOKEN7
            }
          })
            const groups = response.data.response;
            const groupNames = groups.map((group) => {
            const str = "id: " + group.id + ", name: " + group.name;
            return (str);
          })
          console.log(groupNames);
    } catch(error) {
        console.log('Error fetching groups:')
        throw error

    }
}

async function createGroup(gcname, description, thumbnail, accessTokenNum) {
    try {
        const response = await axios.post('https://api.groupme.com/v3/groups', {
            name: gcname,
            share: true,
            description: description,
            image_url: thumbnail
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Token': accessTokenNum
            }
        });
        // group = response.data.response
        const groups = response.data.response
        shareURL = groups.share_url
        console.log(shareURL)
        return shareURL
    } catch (error) {
        console.log("Error creating chat")
        throw error
    }
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const { getGcNames, insertGcLink } = require("./database.js")
activate = false // Activate = true when need to populate groupchats
accessT = [ACCESS_TOKEN1, ACCESS_TOKEN, ACCESS_TOKEN2, ACCESS_TOKEN3, ACCESS_TOKEN4,ACCESS_TOKEN5, ACCESS_TOKEN6, ACCESS_TOKEN7]
if (activate) {
    getGcNames().then(async groupChatNamesList => {
        tokenTracker = 0
        for (i = 189; i < 190; i++) {
            selectThumbnail = i % (images.length)
            try {
                link = await createGroup(groupChatNamesList[i].courseTypeNumber + " Fall 24", groupChatNamesList[i].name + " Fall 24 Groupchat all Sections", images[selectThumbnail],accessT[tokenTracker])
                await insertGcLink(link, i+1)
                console.log(tokenTracker)

                await wait(5000)
            } catch (err) {
                tokenTracker += 1
                i -= 1
                if (tokenTracker > accessT.length) {
                    break
                }
            }
        }
    
    })
}









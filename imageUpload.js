//CODE TO UPLOAD IMAGES TO GROUPME API SERVICE
const fs = require('fs').promises;
async function uploadImageToGroupMe(imagePath) {
  try {
    const imageData = await fs.readFile(imagePath);

    const response = await axios.post('https://image.groupme.com/pictures', imageData, {
      headers: {
        'X-Access-Token': process.env.GM_TOKEN8,
        'Content-Type': 'image/png' // Adjust content type as needed
      }
    });
    return response.data.payload.url;
  } catch (error) {
    console.error('Error uploading image to GroupMe:', error);
    throw error;
  }
}

const images = [];
const strs = ['book2', 'books', 'books1', 'brown', 'cloud', 'cactus', 'cloud2', 'countries', 'dino', 'flower5', 'flower6', 'flowers', 'flower4', 'greenDino', 'lightbulb', 'math', 'mountain', 'paperaiplane', 'pencil', 'planet', 'puzzle', 'rockets1', 'school', 'space1', 'space','space2', 'sun'];
needUploadMoreImages = true
if (needUploadMoreImages) {
    Promise.all(strs.map(async (str) => {
        const imagePath = `gc-${str}.png`;
        try {
          const imageUrl = await uploadImageToGroupMe(imagePath);
          console.log('Image uploaded successfully. URL:', imageUrl);
          images.push(imageUrl);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }))
        .then(() => {
          console.log('All images uploaded:', images);
        });
}
////////////////////////////////////////////////





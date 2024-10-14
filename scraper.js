
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./database");
const url = "https://catalog.purdue.edu/content.php?catoid=7&catoid=7&navoid=2928&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D=1#acalog_template_course_filter";
bigList =[]
async function scrapeCourses() {
    try {

        bigList = []
        for (let i = 1; i < 73; i++) {
            let url = "https://catalog.purdue.edu/content.php?catoid=7&catoid=7&navoid=2928&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D=" + i + "#acalog_template_course_filter"
            const response = await axios.get(url);
            const html = response.data;
            const $ = cheerio.load(html);
            const titles = $('a[href^="preview_course"][title]').map((index, element) => $(element).text()).get()
            
            titles.forEach(element => {
                const big = element.split(' ');
                const type = big[0]
                const number = big[1].split("-")[0].substring(0, 5)
                const name = element.slice(element.indexOf("-") + 2)
                bigList.push([type, number, name, "groupmelink.com"]);
            });
        }
        console.log(bigList.length)
        return bigList
        
    } catch (error) {
        console.error("Error scraping courses:", error);
        return [];
    }
}


module.exports = { scrapeCourses };
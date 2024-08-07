const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const { scrapeCourses } = require("./scraper.js") 

function insertData(data) { //data is an array with 4 values [course_type, course_number, name, groupme_link]
    c_type = data[0]
    c_number = data[1]
    c_name = data[2]
    c_group = data[3]
    const query = "INSERT INTO guide (course_type, course_number, name, groupme_link) VALUES (?, ?, ?, ?)";
    db.query(query, [c_type, c_number, c_name, c_group], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', results);
        }
    });
}
 
//Call scrapeCourses to obtain scrape catalog courses
scrapeWebsite = false; // set to true when need to update database with courses again
if (scrapeWebsite) {
    scrapeCourses().then(bigList => { //big list in an array of arrays containing [course_type, course_number, name, groupme_link] list for each element 
        bigList.forEach(element => {
            insertData(element) //insert into data into db
        });
    }).catch(error => {
        console.error("Error obtaining bigList:", error);
    });
}
async function getGcNames() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM guide", (error, results) => {
            if (error) {
                console.error('Error reading data:', error);
                reject(error);
            } else {
                const groupChatNamesList = results.map(value => {
                    return {
                        name: value.name,
                        courseTypeNumber: value.course_type + " " + value.course_number,
                    };
                });
                resolve(groupChatNamesList);
            }
        });
    });
}

async function insertGcLink(groupLink, dbIndex) {
    q = "UPDATE guide SET groupme_link = ? WHERE id = ?"
    values = [groupLink, dbIndex]
    try {
        await new Promise((resolve, reject) => {
            db.query(q, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    console.log("GroupMe link inserted successfully at id " + (dbIndex));
                    resolve(results);
                }
            });
        });
    } catch (error) {
        console.error("Error inserting GroupMe link:", error);
    }
     
}

module.exports = {db, getGcNames,insertGcLink};





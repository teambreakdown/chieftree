// import con from "../db/con";
const { query } = require("../db/con");

async function getUser(username) {
  try {
    // let queryObject =

    let response = await query(`SELECT * FROM users where username= $1 `, [
      username,
    ]);
    console.log(response.rows);
    return response.rows[0];
  } catch (error) {
    console.log(error.message);
  }
}

async function getPageData() {
  try {
    let queryObject = {
      text: `SELECT * FROM pagedata`,
      params: [],
    };

    let response = await query(queryObject);

    console.log(response.rows);
    return response.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updatePageData({
  avatarUrl = "",
  avatarheight = "",
  avatarwidth = "",
  bgColor = "",
  accentColor = "",
  handlerText = "",
  footerText = "",
  bgImgUrl = "",
}) {
  try {
    // SET column1 = value1,
    //     column2 = value2,
    //     ...
    // WHERE condition;

    let queryObject = {
      text: `UPDATE pagedata  SET "avatarUrl" = $1 , "avatarheight" = $2  , "avatarwidth" = $3 , "bgColor" = $4, "accentColor"=$5, "handlerText"=$6, "footerText"=$7, "bgImgUrl"=$8
      WHERE id=1 `,
      params: [
        avatarUrl,
        avatarheight,
        avatarwidth,
        bgColor,
        accentColor,
        handlerText,
        footerText,
        bgImgUrl,
      ],
    };

    let response = await query(queryObject);

    console.log(response.rows);
    return response.rows[0];
  } catch (error) {
    // console.log(error)
    throw new Error(error.message);
  }
}

async function insertPageLinks({
  avatarUrl = "",
  avatarheight = "",
  avatarwidth = "",
  bgColor = "",
  accentColor = "",
  handlerText = "",
  footerText = "",
  bgImgUrl = "",
}) {
  try {
    // SET column1 = value1,
    //     column2 = value2,
    //     ...
    // WHERE condition;

    // "iconClass" varchar,
    // "displayText" varchar,
    // "linkUrl" varchar,
    // "bgColor" varchar,
    // "created_at"

    let queryObject = {
      text: `UPDATE linkdata  SET "avatarUrl" = $1 , "avatarheight" = $2  , "avatarwidth" = $3 , "bgColor" = $4, "accentColor"=$5, "handlerText"=$6, "footerText"=$7, "bgImgUrl"=$8
      WHERE id=1 `,
      params: [
        avatarUrl,
        avatarheight,
        avatarwidth,
        bgColor,
        accentColor,
        handlerText,
        footerText,
        bgImgUrl,
      ],
    };

    let response = await query(queryObject);

    console.log(response.rows);
    return response.rows[0];
  } catch (error) {
    // console.log(error)
    throw new Error(error.message);
  }
}

module.exports = { getUser, getPageData, updatePageData, insertPageLinks };

// const { Pool, Client } = require('pg')
// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// const pool = new Pool({
//   connectionString,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// const client = new Client({
//   connectionString,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
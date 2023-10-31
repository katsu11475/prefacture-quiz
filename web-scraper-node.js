const PORT = 8000;

const express = require("express");
const axious = require("axios");
const cheerio = require("cheerio");

const app = express();

const URL = "http://neccoya.com/social_studies/geography_Japan/geography_Japan_question402.html#google_vignette";

axious(URL).then((response) => {
  const htmlPaser = response.data;
  console.log(htmlPaser);
});

app.listen(PORT, console.log("surver running!"));
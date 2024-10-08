import * as cheerio from 'cheerio'
import axios from "axios";

const handleEntertainment = async (req, res) => {
  const items = [];
  const link = "https://edition.cnn.com/entertainment";
  const response = await axios(link);
  const html = response.data;
  const $ = cheerio.load(html);
  $(".card", html).each((index, value) => {
    const url = $(value).find("a").attr("href");
    const text = $(value).find(".container__headline-text").text();
    const img = $(value).find("source").attr("srcset");
    items.push({
      url: `https://edition.cnn.com${url}`,
      text,
      img,
      title: "Entertainment",
      heading: "CNN News",
    });
  });
  res.send(items);
};

export default handleEntertainment;

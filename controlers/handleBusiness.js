import axios from "axios";
import * as cheerio from 'cheerio'


const handleBusiness = async (req, res) => {
  const items = [];
  const link = "https://edition.cnn.com/business";
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
      title: "Business",
      heading: "CNN News",
    });
  });
  res.send(items);
};

export default handleBusiness;

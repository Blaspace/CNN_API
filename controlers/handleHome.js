import * as cheerio from 'cheerio'
import axios from "axios";

const handleHome = async (req, res) => {
  const items = [];
  const link = `https://guardian.ng`;

  const response = await axios(link);
  const html = response.data;
  const $ = cheerio.load(html);
  $(".item", html).each((index, value) => {
    const url = $(value).find("a").attr("href");
    //const header = $(value).find()
    const text = $(value).find('.headline').text();
    const img = $(value).find("img").attr("src");
    items.push({
      url: `${url}`,
      text,
      img: `${img}`,
      title: "Home",
      heading: "Guardian News",
    });
  });
  res.send(items);
};


export default handleHome;


import * as cheerio from 'cheerio'
import axios from "axios";

const handleGetSingleNews = async (req, res) => {
  const { url } = req.body;

  const response = await axios(url);
  const html = response.data;
  const $ = cheerio.load(html);
  const heading = $(".headline").find("h1").text();
  const text = [];
  $(".paragraph").each((i, v) => {
    const t = $(v).text();
    text.push(t);
  });
  

  const items = {
    heading: heading,
    text: text,
  };
  res.send(items);
};

export default handleGetSingleNews;

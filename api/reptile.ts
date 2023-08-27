import * as cheerio from "cheerio";

import axios from "axios";

export let datas = (async () => {
  const { data } = await axios.get("https://github.com/trending/javascript");
  const $ = cheerio.load(data);
  const items = $("div.Box article.Box-row");
  const datas: string[] = [];
  const reg = /                        (.*?) \/      (.*?)/g;
  items.each(function () {
    const title = $(this).find(".lh-condensed a").text();
    const description = $(this).find("p.col-9").text();
    const url =
      "https://github.com" + $(this).find(".lh-condensed a").attr("href");

    datas.push([title, description, url]);
  });
  return datas
    .map((e) => e.map((i) => i.replace(/\n/g, "").replace(reg, "$1/$2").trim()))
    .map((e) => {
      return { title: e[0], description: e[1], url: e[2] };
    });
})();

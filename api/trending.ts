import { VercelRequest, VercelResponse } from "@vercel/node";
import {datas} from "./reptile"
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json(await datas);
};

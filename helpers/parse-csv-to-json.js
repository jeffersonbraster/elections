import fs from "fs";
import csv from "csvtojson";
import Iconv from "iconv";
import {
  createDiffPayloads,
  updatedComparePayloads,
} from "#compare/comparePayloads";
import obj1 from "#compare/obj1";
import obj2 from "#compare/obj2";

const ParseCSVToJson = async (file) => {
  const content = fs.readFileSync(`csv_files/${file}`);
  const iconvConverter = new Iconv.Iconv("ISO-8859-15", "UTF-8");
  const buffer = iconvConverter.convert(content);
  const convertedFile = buffer.toString("utf8");

  const test = updatedComparePayloads(obj1, obj2);
  console.log(test);

  return await csv({ delimiter: [";"] }).fromString(convertedFile);
};

export { ParseCSVToJson };

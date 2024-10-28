import fs from "fs/promises";
import handlebars from "handlebars";

const htmlCompiler = async (file, context) => {
  const template = await fs.readFile(file);
  const compiler = handlebars.compile(template.toString());
  const htmlString = compiler(context);
  return htmlString;
};

export default htmlCompiler;

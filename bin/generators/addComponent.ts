import fs from "fs";
import Handlebars from "handlebars";
import shell from "shelljs";
import inquirer from "inquirer";

const rootDir = __dirname;

export default function addComponent() {
  inquirer
  .prompt([
    { type: "input", name: "fileName", message: "Component name => " },
  ])
  .then(answers => {
    const {fileName} = answers
      shell.exec("pwd");
      const testEmailTemplate = fs.readFileSync(
        `${rootDir}/../templates/addComponent.hbs`,
        "utf-8"
      );
      const template = Handlebars.compile(testEmailTemplate);
      shell.mkdir("./components");
      shell.mkdir(`./components/${fileName}`);
      shell.cd(`./components/${fileName}`);
      fs.writeFileSync(`${fileName}.ts`, template({ name: fileName }));
  })

}

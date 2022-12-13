#! /usr/bin/env node

import inquirer from "inquirer";
import addComponent from "./generators/addComponent";

const rootDir = __dirname;
console.log(rootDir);

inquirer
  .prompt([
    {
      type: "list",
      name: "fileToGenerate",
      message: "Which kind of file would you like to generate ?",
      choices: ["addComponent", "page"],
    },
  ])
  .then((answers) => {
    switch (answers.fileToGenerate) {
      case "ui:component":
      default:
        return addComponent();
    }
  });

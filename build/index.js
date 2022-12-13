#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var addComponent_1 = __importDefault(require("./generators/addComponent"));
var rootDir = __dirname;
console.log(rootDir);
inquirer_1.default
    .prompt([
    {
        type: "list",
        name: "fileToGenerate",
        message: "Which kind of file would you like to generate ?",
        choices: ["addComponent", "page"],
    },
])
    .then(function (answers) {
    switch (answers.fileToGenerate) {
        case "ui:component":
        default:
            return (0, addComponent_1.default)();
    }
});

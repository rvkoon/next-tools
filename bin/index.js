#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var shelljs_1 = __importDefault(require("shelljs"));
var rootDir = __dirname;
console.log(rootDir);
inquirer_1.default
    .prompt([
    {
        type: 'list',
        name: 'fileToGenerate',
        message: 'Which kind of file would you like to generate ?',
        choices: ['addComponent', 'page'],
    },
])
    .then(function (answers) {
    shelljs_1.default.cd("".concat(rootDir, "/generators/").concat(answers.fileToGenerate));
    shelljs_1.default.exec("npm run plop:".concat(answers.fileToGenerate));
});

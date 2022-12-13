"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var handlebars_1 = __importDefault(require("handlebars"));
var shelljs_1 = __importDefault(require("shelljs"));
var inquirer_1 = __importDefault(require("inquirer"));
var rootDir = __dirname;
function addComponent() {
    inquirer_1.default
        .prompt([
        { type: "input", name: "fileName", message: "Component name => " },
    ])
        .then(function (answers) {
        var fileName = answers.fileName;
        shelljs_1.default.exec("pwd");
        var testEmailTemplate = fs_1.default.readFileSync("".concat(rootDir, "/../templates/addComponent.hbs"), "utf-8");
        var template = handlebars_1.default.compile(testEmailTemplate);
        shelljs_1.default.mkdir("./components");
        shelljs_1.default.mkdir("./components/".concat(fileName));
        shelljs_1.default.cd("./components/".concat(fileName));
        fs_1.default.writeFileSync("".concat(fileName, ".ts"), template({ name: fileName }));
    });
}
exports.default = addComponent;

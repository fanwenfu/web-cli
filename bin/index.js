const program = require("commander");
const inquirer = require("inquirer");
const path = require("path");
const _ = require("lodash");
const { version } = require("../package.json");
const { exec } = require("child_process");
const chalk = require("chalk");
const checkDire = require("./utils/checkDire.js");
const { promptTypeList } = require("./config");
program
  .version(version, "-v, --version")
  .command("init <projectName>")
  .alias("i")
  .description("输入项目名称，初始化项目模版")
  .action(async (projectName, cmd) => {
    await checkDire(path.join(process.cwd(), projectName), projectName); // 检测创建项目文件夹是否存在
    console.log("");
    console.log(chalk.red("开启前端工程化之路"));
    console.log("");

    inquirer.prompt(promptTypeList).then(function (answers) {
      console.log("输入结果---" + chalk.blue(JSON.stringify(answers)));
      //   exec("git clone " + url, function (error, stdout, stderr) {
      //     if (error !== null) {
      //       console.log(chalk.red(`clone fail,${error}`));
      //       return;
      //     }
      //     fs.rename(gitName, projectName, (err) => {
      //       if (err) {
      //         exec("rm -rf " + gitName, function (err, out) {});
      //         console.log(
      //           chalk.red(`The ${projectName} project template already exist`)
      //         );
      //       } else {
      //         console.log(
      //           chalk.green(
      //             `The ${projectName} project template successfully create(项目模版创建成功)`
      //           )
      //         );
      //       }
      //     });
      //   });
    });
  })
  .on("--help", function () {
    console.log("  Examples:");
    console.log("");
    console.log("$ init <projectName>");
    console.log("$ i <projectName>");
  });

program.parse(process.argv);

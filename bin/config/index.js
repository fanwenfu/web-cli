/*
  @dest: 使用配置文件
  @Author: tree
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/shc-cli/latest",
  promptTypeList: [
    {
      type: "input",
      name: "description",
      message: "请输入项目描述",
    },
    {
      type: "list",
      message: "请选择拉取的模版类型:",
      name: "type",
      choices: [
        {
          name: "mobile",
          value: "mobile",
        },
        {
          name: "pc",
          value: "pc",
        },
      ],
    },
    {
      type: "list",
      name: "cssPretreatment",
      message: "想用什么css预处理器呢",
      choices: [
        {
          name: "Sass/Compass",
          value: "sass",
        },
        {
          name: "Less",
          value: "less",
        },
      ],
    },
  ],
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'start', // 开始做某事，比如创建分支等
        'end', // 结束做某事，比如删除分支等
        'bump', // 修改某个版本号
        'del', // 删除功能
        'feat', // 新功能、新特性
        'fix', // 修改 bug
        'perf', // 更改代码，性能优化
        'refactor', // 代码重构，没有加新功能或者修复bug（在不影响代码内部行为、功能下的代码修改）
        'docs', // 文档修改
        'style', // 代码格式修改, 注意不是 css 修改（例如分号修改）
        'test', // 测试用例新增、修改
        'conf', // 配置文件修改
        'revert', // 恢复上一次提交
        'ci', // 持续集成相关文件修改
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'release', // 发布新版本
        'workflow', // 工作流相关文件修改
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};

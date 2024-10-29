import { exec } from "node:child_process";

exec(
  "npx depcheck --json",
  { maxBuffer: 1024 * 1024 },
  (error, stdout, stderr) => {
    if (error && !stdout) {
      console.error(`执行出错: ${error.message}`);
      console.error(`错误代码: ${error.code}`);
      console.error(`stderr: ${stderr}`);
      process.exit(1);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      process.exit(1);
    }

    try {
      const result = JSON.parse(stdout);
      // 无视的列表
      const ignoredDependencies = [
        "@types/bun",
        "@types/node",
        "@types/react-dom",
        'depcheck',
        'postcss',
      ];
      // 过滤掉忽略的依赖
      const unusedDependencies = [
        ...result.dependencies,
        ...result.devDependencies,
      ].filter(
        (dependency) => !ignoredDependencies.includes(dependency)
      );

      if (unusedDependencies.length > 0) {
        console.log("发现未使用的依赖:");
        console.log(unusedDependencies.join("\n"));
        console.log("请在提交前检查这些依赖是否需要删除。");
      } else {
        console.log("未发现未使用的依赖。可以进行提交！");
      }
    } catch (parseError) {
      console.error("解析 JSON 失败:", parseError);
      console.error("stdout:", stdout);
    }
  }
);

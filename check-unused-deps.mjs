import { spawnSync } from 'node:child_process';
import readlineSync from 'readline-sync';

async function checkUnusedDependencies() {
  try {
    // 使用 spawnSync 同步执行 depcheck 命令
    const result = spawnSync('npx', ['depcheck', '--json'], {
      encoding: 'utf-8',
      maxBuffer: 1024 * 1024,
      shell: true
    });

    if (result.error && !result.stdout) {
      throw result.error;
    }

    const output = JSON.parse(result.stdout);
    const ignoredDependencies = [
      "@types/bun",
      "@types/node",
      "@types/react-dom",
      'depcheck',
      'postcss'
    ];

    const unusedDependencies = [
      ...output.dependencies,
      ...output.devDependencies
    ].filter(dependency => !ignoredDependencies.includes(dependency));

    if (unusedDependencies.length > 0) {
      console.log("发现未使用的依赖:");
      console.log(unusedDependencies.join("\n"));
      console.log("请在提交前检查这些依赖是否需要删除。");

      const answer = readlineSync.question('是否继续提交？(y/N): ');

      if (answer.toLowerCase() !== 'y') {
        console.log("提交已取消。");
        process.exit(1);
      } else {
        console.log("继续提交！");
      }
    } else {
      console.log("未发现未使用的依赖。可以进行提交！");
    }
  } catch (error) {
    console.error(`执行出错: ${error.message}`);
    process.exit(1);
  }
}

// 执行函数
checkUnusedDependencies();

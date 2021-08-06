import path from "path"
import { defineConfig, UserConfigExport, ConfigEnv } from "vite"
import vuePlugin from "@vitejs/plugin-vue"
import { viteMockServe } from 'vite-plugin-mock';
import { loadEnv } from 'vite'
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const Env = loadEnv(mode, process.cwd())
  console.log(Env)
  return {
    plugins: [vuePlugin(),
      viteMockServe({
        // default
        mockPath: 'sever',
        localEnabled: command === 'serve',
        supportTs: true,
        // 监听文件变动
        watchFiles: true,
        // 是否可以在控制台看到请求
        logger: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@comp': path.resolve(__dirname, 'src/components'),
        'path': 'path-browserify'
      }
    }
  };
};
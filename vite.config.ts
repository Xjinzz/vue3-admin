import path from "path"
import { defineConfig, UserConfigExport, ConfigEnv } from "vite"
import vuePlugin from "@vitejs/plugin-vue"
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [vuePlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'path': 'path-browserify'
      }
    }
  };
};
import { App, Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url);
export const bgPlugin = (options) => {
  return (app: App): Plugin => {
    return {
      name: 'vuepress-plugin-bg',
      define: {
        __BG_OPTIONS__: options
      },
      clientConfigFile: path.resolve(
        __dirname,
        '../client/config.js'
      )
    }
  }
}
export default bgPlugin
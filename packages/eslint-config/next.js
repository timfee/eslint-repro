import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'

const config = antfu({
  react: true,
  typescript: {
    /**
     * see https://github.com/antfu/eslint-config/blob/main/src/configs/typescript.ts#L69
     * resolves to:
     * parserOptions: {
     *    // ...
     *    sourceType: "module",
     *    project: "tsconfig.json",
     *    tsconfigRootDir: process.cwd(),
     *    // ...
     * }
     */
    tsconfigPath: 'tsconfig.json',
  },
}, {
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
    '@next/next/no-duplicate-head': 'off',
  },
})

export default config

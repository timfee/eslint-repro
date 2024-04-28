import antfu from '@antfu/eslint-config'

const foo = antfu({
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
})

export default foo

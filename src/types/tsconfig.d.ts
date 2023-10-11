export interface TSConfig {
  include?: string[] | null
  exclude?: string[] | null
  compilerOptions: CompilerOptions
}
export interface CompilerOptions {
  target: string
  module: string
  lib?: string[] | null
  allowJs: boolean
  checkJs: boolean
  jsx: string
  declaration: boolean
  declarationMap: boolean
  sourceMap: boolean
  noEmit: boolean
  outDir: string
  rootDir: string
  strict: boolean
  noImplicitAny: boolean
  strictNullChecks: boolean
  strictFunctionTypes: boolean
  strictPropertyInitialization: boolean
  noImplicitThis: boolean
  alwaysStrict: boolean
  noUnusedLocals: boolean
  noUnusedParameters: boolean
  noImplicitReturns: boolean
  noFallthroughCasesInSwitch: boolean
  moduleResolution: string
  rootDirs?: string[] | null
  typeRoots?: string[] | null
  types?: string[] | null
  esModuleInterop: boolean
  experimentalDecorators: boolean
  emitDecoratorMetadata: boolean
  forceConsistentCasingInFileNames: boolean
  preserveConstEnums: boolean
  pretty: boolean
  allowSyntheticDefaultImports: boolean
  declarationDir: string
  paths: Paths
}
export interface Paths {
  "@data"?: string[] | null
  "@components"?: string[] | null
  "@svg"?: string[] | null
}

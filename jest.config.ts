import { createDefaultPreset } from 'ts-jest'
import type { Config } from 'jest'

const tsJestTransformCfg = createDefaultPreset().transform

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',          // required for React
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    ...tsJestTransformCfg
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}

export default config

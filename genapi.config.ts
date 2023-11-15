import { defineConfig } from '@genapi/config'

const config = defineConfig({
  pipeline: 'swag-fetch-ts',
  input: 'https://petstore.swagger.io/v2/swagger.json',
  output: 'apis/index.ts',
})

export default config
// react-use

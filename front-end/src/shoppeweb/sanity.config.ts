import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Shoppe_web',

  projectId: '2cwjjvcf',
  dataset: 'shoppeweb',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {assist} from '@sanity/assist'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sissinails',

  projectId: 'l8uqhb7z',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
    assist(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        // preview: '/',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
  ],

  tools: [],

  schema: {
    types: schemaTypes,
  },
})

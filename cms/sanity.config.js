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

  basePath: '/admin',

  plugins: [
    structureTool(),
    visionTool(),
    assist(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
        preview: '/',
        previewMode: {},
      },
    }),
  ],

  tools: [],

  schema: {
    types: schemaTypes,
  },
})

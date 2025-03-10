import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'sissinails',

  projectId: 'l8uqhb7z',
  dataset: 'production',

  basePath: '/admin',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000',
        preview: '/',
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

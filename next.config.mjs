import withMarkdoc from '@markdoc/next.js'

import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kn-docs',
  assetPrefix: '/kn-docs/',
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)

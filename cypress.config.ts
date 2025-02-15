const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "2brp3u",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})
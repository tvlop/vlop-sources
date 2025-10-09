const fs = require('fs')
const path = require('path')

const sourcesDir = path.join(__dirname, '..', 'sources')
const outputFile = path.join(__dirname, '..', 'all-sources.json')

function buildSources() {
  try {
    const files = fs.readdirSync(sourcesDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    const sources = []
    
    for (const file of jsonFiles) {
      try {
        const filePath = path.join(sourcesDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const source = JSON.parse(content)
        sources.push(source)
      } catch (error) {
        console.warn(`skipping invalid source ${file}: ${error.message}`)
      }
    }
    
    sources.sort((a, b) => a.priority - b.priority)
    
    fs.writeFileSync(outputFile, JSON.stringify(sources, null, 2))
    console.log(`built ${sources.length} sources to all-sources.json`)
    
  } catch (error) {
    console.error('failed to build sources:', error.message)
    process.exit(1)
  }
}

buildSources()
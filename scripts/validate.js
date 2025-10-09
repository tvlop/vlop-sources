const fs = require('fs')
const path = require('path')

const sourcesDir = path.join(__dirname, '..', 'sources')
const requiredFields = ['id', 'name', 'type', 'baseUrl', 'supportsMovies', 'supportsShows', 'quality', 'isActive', 'priority']

function validateSources() {
  try {
    const files = fs.readdirSync(sourcesDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    let hasErrors = false
    
    for (const file of jsonFiles) {
      console.log(`validating ${file}...`)
      
      try {
        const filePath = path.join(sourcesDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const source = JSON.parse(content)
        
        for (const field of requiredFields) {
          if (source[field] === undefined) {
            console.error(`✗ missing required field: ${field} in ${file}`)
            hasErrors = true
          }
        }
        
        if (!hasErrors) {
          console.log(`✓ ${file} is valid`)
        }
        
      } catch (error) {
        console.error(`✗ ${file} has invalid JSON: ${error.message}`)
        hasErrors = true
      }
    }
    
    if (hasErrors) {
      process.exit(1)
    } else {
      console.log('all sources are valid!')
    }
    
  } catch (error) {
    console.error('failed to validate sources:', error.message)
    process.exit(1)
  }
}

validateSources()
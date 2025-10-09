const fs = require('fs')
const path = require('path')

function loadSources() {
  const sourcesDir = path.join(__dirname, 'sources')
  const sources = []
  
  try {
    const files = fs.readdirSync(sourcesDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    for (const file of jsonFiles) {
      try {
        const filePath = path.join(sourcesDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const source = JSON.parse(content)
        sources.push(source)
      } catch (error) {
        console.warn(`Failed to load source from ${file}:`, error.message)
      }
    }
    
    return sources.sort((a, b) => a.priority - b.priority)
  } catch (error) {
    console.error('Failed to load sources directory:', error.message)
    return []
  }
}

function getActiveSources() {
  return loadSources().filter(source => source.isActive)
}

function getSourcesForType(type, isPremium = false) {
  const activeSources = getActiveSources()
  
  if (isPremium) {
    return activeSources.filter(source =>
      !source.hasAds &&
      (source.type === 'universal' ||
        (type === 'movie' && source.supportsMovies) ||
        (type === 'show' && source.supportsShows))
    )
  }
  
  return activeSources.filter(source =>
    !source.isPremium &&
    (source.type === 'universal' ||
      (type === 'movie' && source.supportsMovies) ||
      (type === 'show' && source.supportsShows))
  )
}

function getSourceById(id) {
  return loadSources().find(source => source.id === id)
}

function buildResourceUrl(resource, type, id, season, episode) {
  const tmdbType = type === 'movie' ? 'movie' : 'tv'
  let url = resource.baseUrl
  
  if (resource.id === 'vidsrc-wtf') {
    if (type === 'movie' && resource.movieUrlPattern) {
      url += `/${resource.movieUrlPattern.replace('{id}', id)}`
    } else if (type === 'show' && resource.showUrlPattern) {
      const seasonNum = season || 1
      const episodeNum = episode || 1
      url += `/${resource.showUrlPattern
        .replace('{id}', id)
        .replace('{season}', seasonNum.toString())
        .replace('{episode}', episodeNum.toString())}`
    }
    return url
  }
  
  if (type === 'movie' && resource.movieUrlPattern) {
    url += `/${resource.movieUrlPattern.replace('{id}', id)}`
    return url
  }
  
  if (type === 'show' && resource.showUrlPattern) {
    const seasonNum = season || 1
    const episodeNum = episode || 1
    url += `/${resource.showUrlPattern
      .replace('{id}', id)
      .replace('{season}', seasonNum.toString())
      .replace('{episode}', episodeNum.toString())
      .replace('{season_number}', seasonNum.toString())
      .replace('{episode_number}', episodeNum.toString())}`
    return url
  }
  
  if (resource.urlPattern) {
    if (resource.urlPattern.includes('?')) {
      url += `?${resource.urlPattern.replace('{type}', tmdbType).replace('{id}', id)}`
    } else {
      url += `/${resource.urlPattern.replace('{type}', tmdbType).replace('{id}', id)}`
    }
  }
  
  return url
}

module.exports = {
  loadSources,
  getActiveSources,
  getSourcesForType,
  getSourceById,
  buildResourceUrl
}
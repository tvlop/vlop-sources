# contributing to vlop sources (⌐■_■)

thanks for wanting to add sources to vlop! here's how to do it without breaking anything (ง°ل͜°)ง

## how to add a source

1. **fork this repo** - click that fork button up top
2. **clone your fork** - `git clone https://github.com/yourusername/vlop-sources.git`
3. **create a new json file** in the `sources/` folder
4. **name it something descriptive** like `your-provider-name.json`
5. **fill in the source details** using the template below
6. **commit and push** your changes
7. **create a pull request** back to this repo

## source template

copy this and fill in your details:

```json
{
  "id": "your-unique-id",
  "name": "Your Provider Name",
  "type": "universal",
  "baseUrl": "https://yourprovider.com/embed",
  "movieUrlPattern": "movie/{id}",
  "showUrlPattern": "tv/{id}/{season}/{episode}",
  "supportsMovies": true,
  "supportsShows": true,
  "quality": "FHD",
  "isActive": true,
  "priority": 10,
  "hasAds": false,
  "allowAllDomains": true,
  "allowEmbeds": true,
  "allowImages": true,
  "allowScripts": true
}
```

## field explanations

- **id**: unique identifier, use lowercase with dashes
- **name**: display name for the source
- **type**: usually "universal" (supports both movies and shows)
- **baseUrl**: the main embed URL without the specific path
- **movieUrlPattern**: how to build movie URLs (use {id} placeholder)
- **showUrlPattern**: how to build show URLs (use {id}, {season}, {episode})
- **quality**: "HD", "FHD", or "4K"
- **priority**: lower numbers = higher priority (0-5 for premium, 6+ for others)
- **hasAds**: true if the source shows ads

## url patterns

use these placeholders in your patterns:
- `{id}` - the movie/show ID
- `{season}` - season number
- `{episode}` - episode number

examples:
- movie: `movie/{id}` becomes `movie/12345`
- show: `tv/{id}/{season}/{episode}` becomes `tv/67890/1/5`

## headers (optional)

if your source needs special headers:

```json
{
  "headers": {
    "referer": "https://yoursite.com/",
    "origin": "https://yoursite.com"
  }
}
```

## what we look for

- **working sources** - obviously
- **clean json** - no syntax errors
- **proper priority** - don't set it to 0 unless it's premium quality
- **accurate info** - if it has ads, mark hasAds as true

## what gets rejected

- broken or dead sources
- malicious or sketchy providers
- duplicate sources (check existing ones first)
- sources that don't actually work

## priority guidelines

- **0-2**: vlop official sources only
- **3-5**: premium sources (no ads, high quality)
- **6-10**: good sources (might have ads)
- **11+**: backup sources

## need help?

- check existing sources for examples
- open an issue if you're stuck
- make sure your json is valid (use a json validator)

that's it! keep it simple and make sure it works (✧ω✧)
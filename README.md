![Vlop Sources](https://www.vlop.fun/vlop.gif)

# vlop sources (⌐■_■)

community sources for vlop streaming. no bs, just sources that slap (ง°ل͜°)ง

## what's this about

all the streaming sources that power vlop live here. each source is a json file with everything needed to make it work (★‿★)

community can add sources, we review, everyone wins. no more waiting for us to add every provider (≧◡≦)

## add your source

1. fork this repo (╯✧▽✧)╯
2. make new json in `sources/` folder
3. use template below
4. submit pull request
5. we check it and merge if it works (✧ω✧)

## template

```json
{
  "id": "your-source-id",
  "name": "Your Source Name",
  "type": "universal",
  "baseUrl": "https://your-source.com/embed",
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

## rules (¬‿¬)

- keep it clean, no sketchy stuff
- one source per file
- name files properly
- make sure it actually works (ಥ﹏ಥ)

## quality levels

- `HD`: 720p
- `FHD`: 1080p  
- `4K`: 2160p

## priority system (★ω★)

lower = higher priority:

- 0-5: premium (no ads, fire quality)
- 6-10: good sources (might have ads)
- 11+: backup sources

## contributing

we love good sources:

- must actually work
- no dead links
- proper headers if needed

built for the streaming community (｡◕‿‿◕｡)
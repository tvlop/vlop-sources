![Vlop Sources](https://www.vlop.fun/vlop.gif)

# vlop sources (⌐■_■)

community sources for vlop (ง°ل͜°)ง

## what's this about

All Vlop’s streaming power is here ★‿★ Each source’s a JSON with everything it needs. Community adds, we review, everyone wins ≧◡≦ No more waiting

## add your source  

1. fork this repo (╯✧▽✧)╯
2. make new json in `sources/` folder
3. use template below
4. submit pull request
5. we check it and merge if it works (✧ω✧)

## template

```json
{
  "id": "vlop-drip",
  "name": "papavlop",
  "type": "universal",
  "baseUrl": "https://vlop.drip/embed",
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

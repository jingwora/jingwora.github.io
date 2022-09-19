---
tags: [" #medroot"]
aliases: []
roots: [plex_-]
forms: [combining]
alphabet:: P
definition: [plexus]
---
>[!Note] DEFINITION of plex_-
>plexus
_____
>[!info]+ ETYMOLOGY of plex_-
>#latin plexus (braid)
_____
>[!example]+ RELATED TERMS to plex_-
>
>| [[plex_-]] | plexus |  -  |
|:----------:|:------:|:---:|
|  [[ret-]]  |  YES   | retina, network    |
_____
>[!tip]+ DERIVATIONS of plex_-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
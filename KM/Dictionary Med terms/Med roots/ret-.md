---
tags: [" #medroot"]
aliases: [retin-]
roots: [ret-, retin-]
forms: [combining]
alphabet:: R
definition: [retina, network, plexus]
---
>[!Note] DEFINITION of ret-
>1. retina
>2. network, plexus
_____
>[!info]+ ETYMOLOGY of ret-
>#latin rete, retis (net)
_____
>[!example]+ RELATED TERMS to ret-
>
>|  [[ret-]]  | retina | network | plexus |
|:----------:|:------:|:-------:|:------:|
| [[plex_-]] |   -    |    -    | YES       |
_____
>[!tip]+ DERIVATIONS of ret-
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
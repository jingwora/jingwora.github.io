---
tags: [" #medroot"]
aliases: []
roots: [chron-]
forms: [combining]
alphabet:: C
definition: [time, timing]
---
>[!Note] DEFINITION of chron-
>time, timing
_____
>[!info]+ ETYMOLOGY of chron-
>#greek chronos
_____
>[!example]+ RELATED TERMS to chron-
>
_____
>[!tip]+ DERIVATIONS of chron-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!FAQ]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
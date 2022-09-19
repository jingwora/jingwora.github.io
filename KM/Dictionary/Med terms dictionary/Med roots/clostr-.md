---
tags: [" #medroot"]
aliases: []
roots: [clostr-]
forms: [combining]
alphabet:: C
definition: [spindle]
---
>[!Note] DEFINITION of clostr-
>spindle
_____
>[!info]+ ETYMOLOGY of clostr-
>#greek kloster
_____
>[!example]+ RELATED TERMS to clostr-
>
_____
>[!tip]+ DERIVATIONS of clostr-
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
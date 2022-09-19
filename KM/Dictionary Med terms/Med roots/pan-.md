---
tags: [" #medroot"]
aliases: [pant-]
roots: [pan-, pant-]
forms: [combining]
alphabet:: P
definition: [all, entire, every]
---
>[!Note] DEFINITION of pan-
>all, entire, every
_____
>[!info]+ ETYMOLOGY of pan-
>#greek pas, pantos
_____
>[!example]+ RELATED TERMS to pan-
>
_____
>[!tip]+ DERIVATIONS of pan-
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
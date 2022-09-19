---
tags: [" #medroot"]
aliases: []
roots: [trop-]
forms: [combining]
alphabet:: T
definition: [turning]
---
>[!Note] DEFINITION of trop-
>turning
_____
>[!info]+ ETYMOLOGY of trop-
>#greek trope
_____
>[!example]+ RELATED TERMS to trop-
>
_____
>[!tip]+ DERIVATIONS of trop-
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
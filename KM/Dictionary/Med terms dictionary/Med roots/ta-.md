---
tags: [" #medroot"]
aliases: []
roots: [ta-]
forms: [combining]
alphabet:: T
definition: [stretching]
---
>[!Note] DEFINITION of ta-
>stretching
_____
>[!info]+ ETYMOLOGY of ta-
>#greek tasis
_____
>[!example]+ RELATED TERMS to ta-
>
_____
>[!tip]+ DERIVATIONS of ta-
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
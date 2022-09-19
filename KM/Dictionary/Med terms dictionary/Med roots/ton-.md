---
tags: [" #medroot"]
aliases: []
roots: [ton-]
forms: [combining]
alphabet:: T
definition: [tone, tension]
---
>[!Note] DEFINITION of ton-
>(muscular) tone, tension
_____
>[!info]+ ETYMOLOGY of ton-
>#greek tonos (a stretching)
_____
>[!example]+ RELATED TERMS to ton-
>
_____
>[!tip]+ DERIVATIONS of ton-
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
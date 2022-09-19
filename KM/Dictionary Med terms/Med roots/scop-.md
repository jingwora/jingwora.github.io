---
tags: [" #medroot"]
aliases: []
roots: [scop-]
forms: [combining]
alphabet:: S
definition: [look at, examine]
---
>[!Note] DEFINITION of scop-
>look at, examine
_____
>[!info]+ ETYMOLOGY of scop-
>#greek skopein
_____
>[!example]+ RELATED TERMS to scop-
>
_____
>[!tip]+ DERIVATIONS of scop-
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
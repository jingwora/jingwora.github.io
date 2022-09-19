---
tags: [" #medroot"]
aliases: []
roots: [-idr-]
forms: [combining]
alphabet:: I
definition: [sweat]
---
>[!Note] DEFINITION of -idr-
>sweat
_____
>[!info]+ ETYMOLOGY of -idr-
>#greek hidros, hidrotos
_____
>[!example]+ RELATED TERMS to -idr-
>
>| [[-idr-]] | sweat |   -   |
|:---------:|:-----:|:-----:|
| [[hidr-]] |  YES  |   -   |
| [[sud-]]  |  YES  | fluid |
_____
>[!tip]+ DERIVATIONS of -idr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
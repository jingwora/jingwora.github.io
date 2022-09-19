---
tags: [" #medroot"]
aliases: [hidrot-]
roots: [hidr-, hidrot-]
forms: [combining]
alphabet:: H
definition: [sweat]
---
>[!Note] DEFINITION of hidr-
>sweat 
>*not to be confused with: [[hydr-]] (water)*
_____
>[!info]+ ETYMOLOGY of hidr-
>#greek hidros, hidrotos
_____
>[!example]+ RELATED TERMS to hidr-
>
>| [[hidr-]] | sweat |  -  |
|:---------:|:-----:|:---:|
| [[-idr-]] |  YES  |  -  |
| [[sud-]]  |  YES  | fluid    |
_____
>[!tip]+ DERIVATIONS of hidr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
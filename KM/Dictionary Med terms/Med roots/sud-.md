---
tags: [" #medroot"]
aliases: [sudor-]
roots: [sud-, sudor-]
forms: [combining]
alphabet:: S
definition: [sweat, fluid]
---
>[!Note] DEFINITION of sud-
>sweat, fluid
_____
>[!info]+ ETYMOLOGY of sud-
>#latin sudor
_____
>[!example]+ RELATED TERMS to sud-
>
>| [[sud-]]  | sweat | fluid |   -   |
|:---------:|:-----:|:-----:|:-----:|
| [[hidr-]] |  YES  |   -   |   -   |
| [[hydr-]] |   -   |  YES  | water |
| [[-idr-]] |  YES  |   -   | -      |
_____
>[!tip]+ DERIVATIONS of sud-
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
---
tags: [" #medroot"]
aliases: [kel-, c(k)el-]
roots: [-cel-]
forms: [combining]
alphabet:: C
definition: [hernia, tumor, swelling]
---
>[!Note] DEFINITION of -cel-
>hernia, tumor, swelling, *bulge*
_____
>[!info]+ ETYMOLOGY of -cel-
>#greek kele
_____
>[!example]+ RELATED TERMS to -cel-
>
>| [[-cel-]] | tumor | swelling | hernia |    -    |
|:---------:|:-----:|:--------:|:------:|:-------:|
| [[edema]] |   -   |   YES    |   -    |    -    |
| [[-oma]]  |  YES  |    -     |   -    | disease |
| [[onc-]]  |  YES  |    -     |   -    |    -    |
_____
>[!tip]+ DERIVATIONS of -cel-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]



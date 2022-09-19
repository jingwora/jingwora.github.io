---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [eu-]
alphabet:: E
definition: [good, normal, healthy]
---
>[!Note] DEFINITION of eu-
>good, normal, healthy
_____
>[!info]+ ETYMOLOGY of eu-
>#greek
_____
>[!example]+ RELATED TERMS to eu-
>
>|  [[eu-]]  | good | normal | healthy |  -  |
|:---------:|:----:|:------:|:-------:|:---:|
| [[orth-]] |  -   |  YES   |    -    | straight, erect    |
_____
>[!tip]+ DERIVATIONS of eu-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
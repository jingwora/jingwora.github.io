---
tags: [" #medroot"]
aliases: []
roots: [ultra-]
forms: [prefix]
alphabet:: U
definition: [beyond, excess]
---
>[!Note] DEFINITION of ultra-
>beyond, excess
_____
>[!info]+ ETYMOLOGY of ultra-
>#latin
_____
>[!example]+ RELATED TERMS to ultra-
>
>| [[ultra-]] | beyond | excess |         -         |    -     |
|:----------:|:------:|:------:|:-----------------:|:--------:|
| [[extra-]] |  YES   |   -    |  on the outside   |    -     |
| [[para-]]  |  YES   |   -    | alongside, around | abnormal |
| [[super-]] |   -    |  YES   |       over        | above         |
_____
>[!tip]+ DERIVATIONS of ultra-
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
---
tags: [" #medroot"]
aliases: []
roots: [angi-]
forms: [combining]
alphabet:: A
definition: [vessel, duct]
---
>[!Note] DEFINITION of angi-
>(blood) vessel, duct
_____
>[!info]+ ETYMOLOGY of angi-
>#greek angeion
_____
>[!example]+ RELATED TERMS to angi-
>
>| [[angi-]]  | vessel | duct |      -       |           -           |
|:----------:|:------:|:----:|:------------:|:---------------------:|
| [[-doch-]] |   -    | YES  |      -       |           -           |
|  [[por-]]  |   -    | YES  |   passage    | pore, opening, cavity |
|  [[vas-]]  |  YES   |  -   | vas deferens | -                      |
_____
>[!tip]+ DERIVATIONS of angi-
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
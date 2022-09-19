---
tags: [" #medroot"]
aliases: []
roots: [os]
forms: [combining]
alphabet:: O
definition: [mouth, opening]
---
>[!Note] DEFINITION of os
>mouth, opening
_____
>[!info]+ ETYMOLOGY of os
>#latin os, oris
_____
>[!example]+ RELATED TERMS to os
>
>|  [[os]]  | mouth | opening |    -    |         -          |
|:---------:|:-----:|:-------:|:-------:|:------------------:|
| [[meat-]] |   -   |   YES   | passage |       meatus       |
|  [[or-]]   |  YES  |   YES   |    -    |         -          |
| [[por-]]  |   -   |   YES   | passage | duct, pore, cavity |
| [[stom-]] |  YES  |   YES   |    -    | -                   |
_____
>[!tip]+ DERIVATIONS of os
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
---
tags: [" #medroot"]
aliases: [stomat-]
roots: [stom-, stomat-]
forms: [combining]
alphabet:: S
definition: [mouth, opening]
---
>[!Note] DEFINITION of stom-
>mouth, opening
_____
>[!info]+ ETYMOLOGY of stom-
>#greek stoma, stomatos
_____
>[!example]+ RELATED TERMS to stom-
>
>|  [[stom-]]  | mouth | opening |    -    |         -          |
|:---------:|:-----:|:-------:|:-------:|:------------------:|
| [[meat-]] |   -   |   YES   | passage |       meatus       |
|  [[or-]]   |  YES  |   YES   |    -    |         -          |
| [[por-]]  |   -   |   YES   | passage | duct, pore, cavity |
| [[os]] |  YES  |   YES   |    -    | -                   |
_____
>[!tip]+ DERIVATIONS of stom-
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
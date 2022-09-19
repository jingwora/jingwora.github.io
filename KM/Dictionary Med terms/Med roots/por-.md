---
tags: [" #medroot"]
aliases: []
roots: [por-]
forms: [combining]
alphabet:: P
definition: [passage, opening, duct, pore, cavity]
---
>[!Note] DEFINITION of por-
>passage, opening, duct, pore, cavity
_____
>[!info]+ ETYMOLOGY of por-
>#greek poros
_____
>[!example]+ RELATED TERMS to por-
>
>|  [[por-]]   | passage | opening | duct | pore | cavity |        -         |           -           |
|:-----------:|:-------:|:-------:|:----:|:----:|:------:|:----------------:|:---------------------:|
|  [[angi-]]  |    -    |    -    | YES  |  -   |   -    |      vessel      |           -           |
|  [[alve-]]  |    -    |    -    |  -   |  -   |  YES   |      hollow      |           -           |
| [[-doch-]]  |    -    |    -    | YES  |  -   |   -    |        -         |           -           |
|  [[stom-]]  |    -    |   YES   |  -   |  -   |   -    |      mouth       |           -           |
| [[syring-]] |    -    |    -    |  -   |  -   | cavity | fistula, syringe | oviduct, sweat glands |
|  [[meat-]]  |   YES   |   YES   |  -   |  -   |   -    |      meatus      |           -           |
|   [[or-]]   |    -    |   YES   |  -   |  -   |   -    |      mouth       |           -           |
|   [[os]]    |    -    |   YES   |  -   |  -   |   -    |      mouth       | -                      |
_____
>[!tip]+ DERIVATIONS of por-
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
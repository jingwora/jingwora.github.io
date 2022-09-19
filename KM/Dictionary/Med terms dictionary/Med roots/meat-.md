---
tags: [" #medroot"]
aliases: []
roots: [meat-]
forms: [combining]
alphabet:: M
definition: [passage, opening, meatus]
---
>[!Note] DEFINITION of meat-
>passage, opening, meatus, hole
_____
>[!info]+ ETYMOLOGY of meat-
>#latin meatus
_____
>[!example]+ RELATED TERMS to meat-
>
>| [[meat-]] | passage | opening | meatus |         -          |
|:---------:|:-------:|:-------:|:------:|:------------------:|
|  [[or-]]  |    -    |   YES   |   -    |       mouth        |
|  [[os]]   |    -    |   YES   |   -    |       mouth        |
| [[por-]]  |   YES   |   YES   |   -    | duct, pore, cavity |
| [[stom-]] |    -    |   YES   |   -    | mouth, opening                   |
_____
>[!tip]+ DERIVATIONS of meat-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
---
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
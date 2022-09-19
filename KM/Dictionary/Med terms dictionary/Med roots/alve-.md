---
tags: [" #medroot"]
aliases: []
roots: [alve-]
forms: [combining]
alphabet:: A
definition: [hollow, cavity]
---
>[!Note] DEFINITION of alve-
>hollow, cavity
_____
>[!info]+ ETYMOLOGY of alve-
>#latin alveus
_____
>[!example]+ RELATED TERMS to alve-
>
>|  [[alve-]]  | hollow | cavity |            -----             |
|:-----------:|:------:|:------:|:----------------------------:|
|  [[por-]]   |   -    |  YES   | passage, opening, duct, pore |
| [[syring-]] |   -    |  YES   | fistula, oviduct, sweat glands, syringe                             |
_____
>[!tip]+ DERIVATIONS of alve-
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
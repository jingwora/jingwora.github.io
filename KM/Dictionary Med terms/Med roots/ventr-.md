---
tags: [" #medroot"]
aliases: []
roots: [ventr-]
forms: [combining]
alphabet:: V
definition: [belly, abdomen, abominal cavity]
---
>[!Note] DEFINITION of ventr-
>belly, abdomen, abdominal cavity
_____
>[!info]+ ETYMOLOGY of ventr-
>#latin venter, ventris
_____
>[!example]+ RELATED TERMS to ventr-
>
>|  [[ventr-]]  | belly | abdomen | abdominal cavity |       -        |
|:------------:|:-----:|:-------:|:----------------:|:--------------:|
| [[abdomin-]] |  YES  |   YES   |        -         |       -        |
|   [[cel-]]   |   -   |   YES   |        -         |       -        |
|  [[lapar-]]  |   -   |   YES   |        -         | abdominal wall |
|  [[uter-]]   |  YES  |    -    |        -         | uterus               |
_____
>[!tip]+ DERIVATIONS of ventr-
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
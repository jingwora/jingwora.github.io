---
tags: [" #medroot"]
aliases: [celi-]
roots: [cel-, celi-]
forms: [combining]
alphabet:: C
definition: [abdomen]
---
>[!Note] DEFINITION of cel-
>abdomen
_____
>[!info]+ ETYMOLOGY of cel-
>#greek koila
_____
>[!example]+ RELATED TERMS to cel-
>
>|   [[cel-]]   | abdomen |   -   |        -         |
|:------------:|:-------:|:-----:|:----------------:|
| [[abdomin-]] |   YES   | belly |        -         |
|  [[lapar-]]  |   YES   |   -   |  abdominal wall  |
|  [[ventr-]]  |   YES   | belly | abdominal cavity |
_____
>[!tip]+ DERIVATIONS of cel-
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
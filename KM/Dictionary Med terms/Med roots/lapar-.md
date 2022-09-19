---
tags: [" #medroot"]
aliases: []
roots: [lapar-]
forms: [combining]
alphabet:: L
definition: [abdomen, abdominal wall]
---
>[!Note] DEFINITION of lapar-
>abdomen, abdominal wall
_____
>[!info]+ ETYMOLOGY of lapar-
>#greek lapara
_____
>[!example]+ RELATED TERMS to lapar-
>
>|  [[lapar-]]  | abdomen | abdominal wall |   -   |
|:------------:|:-------:|:--------------:|:-----:|
| [[abdomin-]] |   YES   |       -        | belly |
|   [[cel-]]   |   YES   |       -        |   -   |
|  [[ventr-]]  |   YES   |       -        | abdomen, abdominal cavity      |
_____
>[!tip]+ DERIVATIONS of lapar-
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
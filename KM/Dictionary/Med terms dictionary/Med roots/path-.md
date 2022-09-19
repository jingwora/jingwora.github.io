---
tags: [" #medroot"]
aliases: []
roots: [path-]
forms: [combining]
alphabet:: P
definition: [disease]
---
>[!Note] DEFINITION of path-
>disease
_____
>[!info]+ ETYMOLOGY of path-
>#greek pathos (suffering)
_____
>[!example]+ RELATED TERMS to path-
>
>| [[path-]]  | disease |               -                |
|:----------:|:-------:|:------------------------------:|
| [[-iasis]] |   YES   | abnormal condition/presence of |
|  [[nos-]]  |   YES   |            illness             |
|  [[-oma]]  |   YES   |             tumor              |
| [[-pathy]] |   YES   | -                               |
_____
>[!tip]+ DERIVATIONS of path-
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
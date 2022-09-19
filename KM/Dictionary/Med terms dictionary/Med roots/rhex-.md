---
tags: [" #medroot"]
aliases: []
roots: [rhex-]
forms: [combining]
alphabet:: R
definition: [rupture]
---
>[!Note] DEFINITION of rhex-
>rupture
_____
>[!info]+ ETYMOLOGY of rhex-
>#greek rhexis
_____
>[!example]+ RELATED TERMS to rhex-
>
>|  [[rhex-]]   | rupture |  -  |
|:------------:|:-------:|:---:|
| [[-rrhexis]] |   YES   | bursting    |
_____
>[!tip]+ DERIVATIONS of rhex-
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
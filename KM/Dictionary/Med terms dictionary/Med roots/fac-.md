---
tags: [" #medroot"]
aliases: []
roots: [fac-]
forms: [combining]
alphabet:: F
definition: [make]
---
>[!Note] DEFINITION of fac-
>make
_____
>[!info]+ ETYMOLOGY of fac-
>#latin facere, factus
_____
>[!example]+ RELATED TERMS to fac-
>
>| [[fac-]]  | make |  -  |
|:---------:|:----:|:---:|
| [[-fect]] | YES  |  -  |
| [[-fic-]] | YES  |  -  |
| [[poie-]] | YES  | produce    |
_____
>[!tip]+ DERIVATIONS of fac-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!Faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
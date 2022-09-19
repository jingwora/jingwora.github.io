---
tags: [" #medroot"]
aliases: []
roots: [-fect]
forms: [combining]
alphabet:: F
definition: [make]
---
>[!Note] DEFINITION of -fect
>make
_____
>[!info]+ ETYMOLOGY of -fect
>#latin facere, factus
_____
>[!example]+ RELATED TERMS to -fect
>
>| [[-fect]] | make |    -    |
|:---------:|:----:|:-------:|
| [[fac-]]  | YES  |    -    |
| [[-fic-]] | YES  |    -    |
| [[poie-]] | YES  | produce |
_____
>[!tip]+ DERIVATIONS of -fect
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
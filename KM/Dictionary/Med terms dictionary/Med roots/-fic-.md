---
tags: [" #medroot"]
aliases: []
roots: [-fic-]
forms: [combining]
alphabet:: F
definition: [make]
---
>[!Note] DEFINITION of -fic-
>make
_____
>[!info]+ ETYMOLOGY of -fic-
>#latin facere, factus
_____
>[!example]+ RELATED TERMS to -fic-
>
>| [[-fic-]] | make |    -    |
|:---------:|:----:|:-------:|
| [[fac-]]  | YES  |    -    |
| [[-fect]] | YES  |    -    |
| [[poie-]] | YES  | produce |
>
_____
>[!tip]+ DERIVATIONS of -fic-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.nameF
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
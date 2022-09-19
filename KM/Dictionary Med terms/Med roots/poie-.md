---
tags: [" #medroot"]
aliases: []
roots: [poie-]
forms: [combining]
alphabet:: P
definition: [produce, make]
---
>[!Note] DEFINITION of poie-
>produce, make
_____
>[!info]+ ETYMOLOGY of poie-
>#greek poiein
_____
>[!example]+ RELATED TERMS to poie-
>
>| [[poie-]] | produce | make |  -  |
|:---------:|:-------:|:----:|:---:|
| [[fac-]]  |    -    | YES  |  -  |
| [[-fect]]  |    -    | YES  |  -  |
| [[-fic-]] |    -    | YES  |  -  |
| [[gen-]]  |   YES   |  -   | come into being    |
_____
>[!tip]+ DERIVATIONS of poie-
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
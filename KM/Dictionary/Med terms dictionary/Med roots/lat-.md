---
tags: [" #medroot"]
aliases: []
roots: [lat-]
forms: [combining]
alphabet:: L
definition: [bear, carry]
---
>[!Note] DEFINITION of lat-
>bear, carry
_____
>[!info]+ ETYMOLOGY of lat-
>#latin ferre latus
_____
>[!example]+ RELATED TERMS to lat-
>
>| [[fer-]]  | carry | bear |
|:---------:|:-----:|:----:|
| [[gest-]] |  YES  | YES  |
| [[lat-]]  |  YES  | YES     |
_____
>[!tip]+ DERIVATIONS of lat-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
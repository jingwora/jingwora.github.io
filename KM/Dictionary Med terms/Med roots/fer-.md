---
tags: [" #medroot"]
aliases: []
roots: [fer-]
forms: [combining]
alphabet:: F
definition: [carry, bear]
---
>[!Note] DEFINITION of fer-
>carry, bear
_____
>[!info]+ ETYMOLOGY of fer-
>#latin ferre, latus
_____
>[!example]+ RELATED TERMS to fer-
>
>| [[fer-]]  | carry | bear |
|:---------:|:-----:|:----:|
| [[gest-]] |  YES  | YES  |
| [[lat-]]  |  YES  | YES     |
_____
>[!tip]+ DERIVATIONS of fer-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
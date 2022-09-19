---
tags: [" #medroot"]
aliases: [ger_-]
roots: [gest-, ger_-]
forms: [combining]
alphabet:: G
definition: [bear, carry]
---
>[!Note] DEFINITION of gest-
>carry, bear
_____
>[!info]+ ETYMOLOGY of gest-
>#latin
_____
>[!example]+ RELATED TERMS to gest-
>
| [[fer-]]  | carry | bear |
|:---------:|:-----:|:----:|
| [[gest-]] |  YES  | YES  |
| [[lat-]]  |  YES  | YES     |
_____
>[!tip]+ DERIVATIONS of gest-
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
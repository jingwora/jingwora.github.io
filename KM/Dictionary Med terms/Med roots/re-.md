---
tags: [" #medroot"]
aliases: []
roots: [re-]
forms: [prefix]
alphabet:: L
definition: [back, again]
---
>[!Note] DEFINITION of re-
>back, again
_____
>[!info]+ ETYMOLOGY of re-
>#latin
_____
>[!example]+ RELATED TERMS to re-
>
>| [[re-]] | back | again |  -  |    -    |
|:---------:|:----:|:-----:|:---:|:-------:|
| [[ana-]]  | YES  |   -   | up  | against |
|  [[pali-]]  | YES  | YES |  -  | -        |
_____
>[!tip]+ DERIVATIONS of re-
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
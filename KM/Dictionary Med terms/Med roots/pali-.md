---
tags: [" #medroot"]
aliases: [palin-]
roots: [pali-, palin-]
forms: [combining]
alphabet:: P
definition: [back, again]
---
>[!Note] DEFINITION of pali-
>back, again
_____
>[!info]+ ETYMOLOGY of pali-
>#greek palin
_____
>[!example]+ RELATED TERMS to pali-
>
>| [[pali-]] | back | again |  -  |    -    |
|:---------:|:----:|:-----:|:---:|:-------:|
| [[ana-]]  | YES  |   -   | up  | against |
|  [[re-]]  | YES  | YES |  -  | -        |
_____
>[!tip]+ DERIVATIONS of pali-
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
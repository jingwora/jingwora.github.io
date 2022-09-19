---
tags: [" #medroot"]
aliases: []
roots: [alg-]
forms: [combining]
alphabet:: A
definition: [pain]
---
>[!Note] DEFINITION of alg-
>pain 
>*see also: [[alges-]]*
_____
>[!info]+ ETYMOLOGY of alg-
>#greek algos
_____
>[!example]+ RELATED TERMS to alg-
>
>| [[alg-]]  | pain |  -   |
|:---------:|:----:|:----:|
| [[-agra]] | YES  | gout |
| [[odyn-]] | YES  |  -   |
_____
>[!tip]+ DERIVATIONS of alg-
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
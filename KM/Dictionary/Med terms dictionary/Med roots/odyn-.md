---
tags: [" #medroot"]
aliases: []
roots: [odyn-]
forms: [combining]
alphabet:: O
definition: [pain]
---
>[!Note] DEFINITION of odyn-
>pain
_____
>[!info]+ ETYMOLOGY of odyn-
>#greek odyne
_____
>[!example]+ RELATED TERMS to odyn-
>
>| [[odyn-]] | pain |  -   |
|:---------:|:----:|:----:|
| [[-agra]] | YES  | gout |
| [[alg-]]  | YES  | -     |
_____
>[!tip]+ DERIVATIONS of odyn-
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
---
tags: [" #medroot"]
aliases: []
roots: [-agra]
forms: [combining]
alphabet:: A
definition: [pain, gout]
---
>[!Note] DEFINITION of -agra
>(sudden) pain, gout
_____
>[!info]+ ETYMOLOGY of -agra
>#greek agra (hunting)
_____
>[!example]+ RELATED TERMS to -agra
> 
| [[-agra]] | pain | gout |
|:---------:|:----:|:----:|
| [[alg-]]  | YES  |  -   |
| [[odyn-]] | YES  |  -   |
_____
>[!tip]+ DERIVATIONS of -agra
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]



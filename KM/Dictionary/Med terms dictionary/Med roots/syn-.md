---
tags: [" #medroot"]
aliases: [sym-, sy-]
roots: [syn-, sym-, sy-]
forms: [prefix]
alphabet:: S
definition: [together, with, joined]
---
>[!Note] DEFINITION of syn-
>together, with, joined
_____
>[!info]+ ETYMOLOGY of syn-
>#greek
>- sym- before "b, m, p"
>- sy- before "l, s"
_____
>[!example]+ RELATED TERMS to syn-
>
>| [[syn-]] | together | with | joined |  -  |
|:--------:|:--------:|:----:|:------:|:---:|
| [[con-]] |   YES    | YES  |   -    | thoroughly, very    |
_____
>[!tip]+ DERIVATIONS of syn-
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
---
tags: [" #medroot"]
aliases: []
roots: [post-]
forms: [prefix]
alphabet:: P
definition: [after, following, behind]
---
>[!Note] DEFINITION of post-
>after, following, behind
_____
>[!info]+ ETYMOLOGY of post-
>#latin
_____
>[!example]+ RELATED TERMS to post-
>
>|  [[post-]]  | after | following | behind |           -            |
|:-----------:|:-----:|:---------:|:------:|:----------------------:|
|  [[meta-]]  |  YES  |     -     |  YES   | change, transformation |
| [[poster-]] |   -   |     -     |  YEs   |        in back         |
| [[retro-]]  |   -   |     -     |  YES   | backward, in back                       |
_____
>[!tip]+ DERIVATIONS of post-
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
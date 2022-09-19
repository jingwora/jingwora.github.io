---
tags: [" #medroot"]
aliases: []
roots: [retro-]
forms: [prefix]
alphabet:: R
definition: [backward, in back, behind]
---
>[!Note] DEFINITION of retro-
>backward, in back, behind
_____
>[!info]+ ETYMOLOGY of retro-
>#latin
_____
>[!example]+ RELATED TERMS to retro-
>
>| [[retro-]]  | backward | in back | behind |           -            |   -   |
|:-----------:|:--------:|:-------:|:------:|:----------------------:|:-----:|
|  [[meta-]]  |    -     |    -    |  YES   | change, transformation | after |
|  [[post-]]  |    -     |    -    |  YES   |           -            | after |
| [[poster-]] |    -     |   YES   |  YES   |           -            | -      |
_____
>[!tip]+ DERIVATIONS of retro-
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
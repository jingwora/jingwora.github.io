---
tags: [" #medroot"]
aliases: [met-]
forms: [prefix]
roots: [meta-, met-]
alphabet:: M
definition: [change, transformation, after, behind]
---
>[!Note] DEFINITION of meta-
>change, transformation, after, behind
_____
>[!info]+ ETYMOLOGY of meta-
>#greek
>- met- before "h" or {vowel}
_____
>[!example]+ RELATED TERMS to meta-
>
>|  [[meta-]]  | change | transformation | after | behind |     -     |
|:-----------:|:------:|:--------------:|:-----:|:------:|:---------:|
|  [[post-]]  |   -    |       -        |  YES  |  YES   | following |
| [[poster-]] |   -    |       -        |   -   |  YES   |  in back  |
| [[retro-]]  |   -    |       -        |   -   |  YES   | in back, backward          |
_____
>[!tip]+ DERIVATIONS of meta-
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
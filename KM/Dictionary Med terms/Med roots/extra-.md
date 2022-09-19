---
tags: [" #medroot"]
aliases: [extro-]
forms: [prefix]
roots: [extra-, extro-]
alphabet:: E
definition: [on the outside, beyond]
---
>[!Note] DEFINITION of extra-
>on the outside, beyond
_____
>[!info]+ ETYMOLOGY of extra-
>#latin
>- extro- (occurs rarely)
_____
>[!example]+ RELATED TERMS to extra-
>
>| [[extra-]] | on the outside | beyond |         -         |    -     |
|:----------:|:--------------:|:------:|:-----------------:|:--------:|
| [[para-]]  |       -        |  YES   | alongside, around | abnormal |
| [[ultra-]] |       -        |  YES   |      excess       | -         |
_____
>[!tip]+ DERIVATIONS of extra-
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
---
tags: [" #medroot"]
aliases: []
roots: [peri-]
forms: [prefix]
alphabet:: P
definition: [around, surrounding]
---
>[!Note] DEFINITION of peri-
>around, surrounding
_____
>[!info]+ ETYMOLOGY of peri-
>#greek
_____
>[!example]+ RELATED TERMS to peri-
>
>|  [[peri-]]  | around | surrounding |     -     |       -       |
|:-----------:|:------:|:-----------:|:---------:|:-------------:|
| [[amphi-]]  |  YES   |      -      |   both    | on both sides |
| [[circum-]] |  YES   |      -      |     -     |       -       |
|  [[para-]]  |  YES   |      -      | alongside | abnormal, beyond              |
_____
>[!tip]+ DERIVATIONS of peri-
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
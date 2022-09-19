---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [circum-]
alphabet:: C
definition: [around]
---
>[!Note] DEFINITION of circum-
>around
_____
>[!info]+ ETYMOLOGY of circum-
>#latin
_____
>[!example]+ RELATED TERMS to circum-
>
>| [[circum-]] | around |      -      |       -       |   -    |
|:-----------:|:------:|:-----------:|:-------------:|:------:|
| [[amphi-]]  |  YES   |    both     | on both sides |   -    |
|  [[para-]]  |  YES   |  alongside  |   abnormal    | beyond |
|  [[peri-]]  |  YES   | surrounding |               |        |
_____
>[!tip]+ DERIVATIONS of circum-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!FAQ]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
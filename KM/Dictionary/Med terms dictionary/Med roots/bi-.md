---
tags: [" #medroot"]
aliases: [bis-, bin-]
forms: [prefix]
roots: [bi-, bis-, bin-]
alphabet:: B
definition: [two, twice, double, both]
---
>[!Note] DEFINITION of bi-
>two, twice, double, both
_____
>[!info]+ ETYMOLOGY of bi-
>#latin
_____
>[!example]+ RELATED TERMS to bi-
>
>|  [[bi-]]   | two | twice | double | both |           -           |
|:----------:|:---:|:-----:|:------:|:----:|:---------------------:|
| [[ambi-]]  |  -  |   -   |   -    | YES  |           -           |
| [[amphi-]] |  -  |   -   |   -    | YES  | around, on both sides |
|  [[di-]]   | YES |  YES  |  YES   |  -   |           -           |
| [[diplo-]] |  -  |   -   |  YES   |  -   |         twin          |
_____
>[!tip]+ DERIVATIONS of bi-
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
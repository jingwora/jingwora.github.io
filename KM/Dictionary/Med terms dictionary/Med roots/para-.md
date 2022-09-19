---
tags: [" #medroot"]
aliases: [par-]
roots: [para-, par-]
forms: [prefix]
alphabet:: P 
definition: [alongside, around, abnormal, beyond]
---
>[!Note] DEFINITION of para-
>alongside, around, abnormal, beyond
_____
>[!info]+ ETYMOLOGY of para-
>#greek
>- par- before {vowel}
_____
>[!example]+ RELATED TERMS to para-
>
>|  [[para-]]  | alongside | around | abnormal | beyond |         -          |     -     |
|:-----------:|:---------:|:------:|:--------:|:------:|:------------------:|:---------:|
| [[amphi-]]  |     -     |  YES   |    -     |   -    |   on both sides    |   both    |
| [[circum-]] |     -     |  YES   |    -     |   -    |         -          |     -     |
|  [[dys-]]   |     -     |   -    |   YES    |   -    | difficult, painful | defective |
|  [[peri-]]  |     -     |  YES   |    -     |   -    |    surrounding     |           |
| [[ultra-]]  |     -     |   -    |    -     |  YES   |       excess       |           |
| [[extra-]]  |     -     |   -    |    -     |  YES   |   on the outside    | -          |
_____
>[!tip]+ DERIVATIONS of para-
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
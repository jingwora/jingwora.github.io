---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [dys-]
alphabet:: D
definition: [difficult, painful, defective, abnormal]
---
>[!Note] DEFINITION of dys-
>difficult, painful, defective, abnormal
_____
>[!info]+ ETYMOLOGY of dys-
>#greek
_____
>[!example]+ RELATED TERMS to dys-
>
>| [[dys-]]  | difficult | painful | defective | abnormal |   -    |    -     |   -    |
|:---------:|:---------:|:-------:|:---------:|:--------:|:------:|:--------:|:------:|
| [[para-]] |     -     |    -    |     -     |   YES    | beyond | abnormal | around |
_____
>[!tip]+ DERIVATIONS of dys-
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
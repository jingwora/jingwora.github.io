---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [apo-]
alphabet:: A
definition: [away from]
---
>[!Note] DEFINITION of apo-
>away from
_____
>[!info]+ ETYMOLOGY of apo-
>#greek
_____
>[!example]+ RELATED TERMS to apo-
>
>| [[apo-]]  | away from |   -    |   -    |
|:--------:|:---------:|:------:|:------:|
| [[ab-]] |    YES    |   -    |   -    |
| [[de-]]  |    YES    |  down  | absent |
| [[ec-]]  |    YES    | out of |   -    |
| [[ex-]]  |    YES    | out of |   -    |
| [[se-]]  |    ES     | out of | -       |
>
_____
>[!tip]+ DERIVATIONS of apo-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
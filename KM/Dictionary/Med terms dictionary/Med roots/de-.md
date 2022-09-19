---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [de-]
alphabet:: D
definition: [down, away from, absent]
---
>[!Note] DEFINITION of de-
>down, away from, absent
_____
>[!info]+ ETYMOLOGY of de-
>#latin
_____
>[!example]+ RELATED TERMS to de-
>
>| [[de-]]  | down | away from | absent |   -    |
|:--------:|:----:|:---------:|:------:|:------:|
| [[ec-]]  |  -   |    YES    |   -    | out of |
| [[ex-]]  |  -   |    YES    |   -    | out of |
| [[ab-]]  |  -   |    YES    |   -    |   -    |
| [[apo-]] |  -   |    YES    |   -    |   -    |
| [[se-]]  |  -   |    YES    |   -    | apart       |
_____
>[!tip]+ DERIVATIONS of de-
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
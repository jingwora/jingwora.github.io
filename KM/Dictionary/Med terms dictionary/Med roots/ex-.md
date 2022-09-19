---
tags: [" #medroot"]
aliases: [e-, ef-]
forms: [prefix]
roots: [ex-, e-, ef-]
alphabet:: E
definition: [out of, away from]
---
>[!Note] DEFINITION of ex-
>(movement) out of, (movement) away from
_____
>[!info]+ ETYMOLOGY of ex-
>#latin
>- e- before certain {consonants}
>- ef- before "f"
_____
>[!example]+ RELATED TERMS to ex-
>
>| [[ex-]]  | out of | away from |  -   |   -    |
|:--------:|:------:|:---------:|:----:|:------:|
| [[ab-]]  |   -    |    YES    |  -   |   -    |
| [[apo-]] |   -    |    YES    |  -   |   -    |
| [[de-]]  |   -    |    YES    | down | absent |
| [[ec-]]  |  YES   |    YES    |  -   |   -    |
| [[se-]]  |   -    |    YES    | apart     |        |
_____
>[!tip]+ DERIVATIONS of ex-
>```dataview
>TABLE definition AS Definition 
>FROM -#medroot
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
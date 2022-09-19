---
tags: [" #medroot"]
aliases: [ex-]
forms: [prefix]
roots: [ec-, ex-]
alphabet:: E
definition: [out of, away from]
---
>[!Note] DEFINITION of ec-
>out of, away from
_____
>[!info]+ ETYMOLOGY of ec-
>#greek
>- ex- before {vowel}
_____
>[!example]+ RELATED TERMS to ec-
>
>| [[ec-]]  | out of | away from |  -   |   -    |
|:--------:|:------:|:---------:|:----:|:------:|
| [[ab-]]  |   -    |    YES    |  -   |   -    |
| [[apo-]] |   -    |    YES    |  -   |   -    |
| [[de-]]  |   -    |    YES    | down | absent |
| [[ex-]]  |  YES   |    YES    |  -   |   -    |
| [[se-]]  |   -    |    YES    | apart     |        |
_____
>[!tip]+ DERIVATIONS of ec-
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
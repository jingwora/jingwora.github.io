---
tags: [" #medroot "]
aliases: [abs-, a(b)-]
forms: [prefix]
roots: [ab-, abs-, a(b)-]
alphabet:: A
definition: [away from]
---
>[!Note] DEFINITION of ab-
>away from
_____
>[!info]+ ETYMOLOGY of ab-
>#latin
>- a- (rarely) before certain consonants
>- abs- before "c" and "t"
_____
>[!example]+ RELATED TERMS to ab-
>
>| [[ab-]]  | away from |   -    |   -    |
|:--------:|:---------:|:------:|:------:|
| [[apo-]] |    YES    |   -    |   -    |
| [[de-]]  |    YES    |  down  | absent |
| [[ec-]]  |    YES    | out of |   -    |
| [[ex-]]  |    YES    | out of |   -    |
| [[se-]]  |    ES     | out of | -       |
_____
>[!tip]+ DERIVATIONS of ab-
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
---
tags: [" #medroot"]
aliases: []
roots: [se-]
forms: [prefix]
alphabet:: S
definition: [apart, away from]
---
>[!Note] DEFINITION of se-
>apart, away from
_____
>[!info]+ ETYMOLOGY of se-
>#latin
_____
>[!example]+ RELATED TERMS to se-
>
>| [[se-]]  | apart | away from |    -    |   -    |
|:--------:|:-----:|:---------:|:-------:|:------:|
| [[ab-]]  |   -   |    YES    |    -    |   -    |
| [[apo-]] |   -   |    YES    |    -    |   -    |
| [[de-]]  |   -   |    YES    |  down   | absent |
| [[dia-]] |  YES  |     -     | through | across |
| [[dis-]] |  YES  |     -     |  away   |   -    |
| [[ec-]]  |   -   |    YES    | out of  |   -    |
| [[ex-]]  |   -   |    YES    | out of  | -       |
_____
>[!tip]+ DERIVATIONS of se-
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
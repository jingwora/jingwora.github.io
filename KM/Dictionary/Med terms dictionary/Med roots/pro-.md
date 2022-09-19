---
tags: [" #medroot "]
aliases: []
roots: [pro-]
forms: [prefix]
alphabet:: P
definition: [before, forward, in front]
---
>[!Note] DEFINITION of pro-
>before, forward, in front
_____
>[!info]+ ETYMOLOGY of pro-
>#greek #latin
_____
>[!example]+ RELATED TERMS to pro-
>
>|  [[pro-]]  | before | forward | in front |   -   |
|:----------:|:------:|:-------:|:--------:|:-----:|
| [[anter-]] |   -    |    -    |   YES    | front |
| [[ante-]]  |  YES   |   YES   |    -     |   -   |
|  [[pre-]]  |  YES   |    -    |   YES    | -      |
_____
>[!tip]+ DERIVATIONS of pro-
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
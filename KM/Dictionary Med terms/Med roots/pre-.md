---
tags: [" #medroot"]
aliases: []
roots: [pre-]
forms: [prefix]
alphabet:: P
definition: [before, in front of]
---
>[!Note] DEFINITION of pre-
>before, in front of
_____
>[!info]+ ETYMOLOGY of pre-
>#latin
_____
>[!example]+ RELATED TERMS to pre-
>
>| [[pre-]]  | before | in front of |    -    |
|:---------:|:------:|:-----------:|:-------:|
| [[ante-]] |  YES   |      -      | forward |
| [[pro-]]  |  YES   |     YES     | forward        |
_____
>[!tip]+ DERIVATIONS of pre-
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
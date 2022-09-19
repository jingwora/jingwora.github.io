---
tags: [" #medroot"]
aliases: []
roots: [bili-]
forms: [combining]
alphabet:: B
definition: [bile]
---
>[!Note] DEFINITION of bili-
>bile
_____
>[!info]+ ETYMOLOGY of bili-
>#latin bilis
_____
>[!example]+ RELATED TERMS to bili-
>
>| [[bili-]] | bile |  -   |
|:---------:|:----:|:----:|
| [[chol-]] | YES  | gall |
_____
>[!tip]+ DERIVATIONS of bili-
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
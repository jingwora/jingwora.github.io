---
tags: [" #medroot"]
aliases: []
roots: [sarc-]
forms: [combining]
alphabet:: S
definition: [flesh, soft tissue, connective tissue]
---
>[!Note] DEFINITION of sarc-
>flesh, soft tissue, connective tissue
_____
>[!info]+ ETYMOLOGY of sarc-
>#greek sarx, sarcos
_____
>[!example]+ RELATED TERMS to sarc-
>
>| [[sarc-]]  | flesh | soft tissue |
|:----------:|:-----:|:-----------:|
| [[creat-]] |  YES  | -            |
_____
>[!tip]+ DERIVATIONS of sarc-
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
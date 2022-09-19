---
tags: [" #medroot"]
aliases: []
roots: [creat-]
forms: [combining]
alphabet:: C
definition: [flesh]
---
>[!Note] DEFINITION of creat-
>flesh
_____
>[!info]+ ETYMOLOGY of creat-
>#greek kreas, kreatos
_____
>[!example]+ RELATED TERMS to creat-
>
>| [[creat-]] | flesh |      -      |
|:----------:|:-----:|:-----------:|
| [[sarc-]]  |  YES  | soft tissue |
_____
>[!tip]+ DERIVATIONS of creat-
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
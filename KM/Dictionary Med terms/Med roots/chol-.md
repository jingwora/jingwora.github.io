---
tags: [" #medroot"]
aliases: [chole-]
roots: [chol-, chole-]
forms: [combining]
alphabet:: C
definition: [bile, gall]
---
>[!Note] DEFINITION of chol-
>bile, gall
>[[chol-|chole-]][[cyst-|-cystis]] - gallbladder
_____
>[!info]+ ETYMOLOGY of chol-
>
_____
>[!example]+ RELATED TERMS to chol-
>
>| [[bili-]] | bile |  gall   |
|:---------:|:----:|:----:|
| [[chol-]] | YES  | - |
_____
>[!tip]+ DERIVATIONS of chol-
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
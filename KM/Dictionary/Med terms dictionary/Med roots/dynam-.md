---
tags: [" #medroot"]
aliases: []
roots: [dynam-]
forms: [combining]
alphabet:: D
definition: [force, power, energy]
---
>[!Note] DEFINITION of dynam-
>force, power, energy
_____
>[!info]+ ETYMOLOGY of dynam-
>#greek dynamis
_____
>[!example]+ RELATED TERMS to dynam-
>
>| [[dynam-]] | force | power | energy |  -  |
|:----------:|:-----:|:-----:|:------:|:---:|
| [[calor-]] |   -   |   -   |  YES   | heat    |
_____
>[!tip]+ DERIVATIONS of dynam-
>```dataview
>TABLE definition AS Definition 
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
---
tags: [" #medroot"]
aliases: []
roots: [calor-]
forms: [combining]
alphabet:: C
definition: [heat, energy]
---
>[!Note] DEFINITION of calor-
>heat, energy
_____
>[!info]+ ETYMOLOGY of calor-
>##latin calor
_____
>[!example]+ RELATED TERMS to calor-
>
>| [[calor-]] | heat | energy |      -      |   -   |
|:----------:|:----:|:------:|:-----------:|:-----:|
| [[dynam-]] |  -   |  YES   |    force    | power |
| [[therm-]] | YES  |   -    | temperature |   -   |
_____
>[!tip]+ DERIVATIONS of calor-
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
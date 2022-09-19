---
tags: [" #medroot"]
aliases: []
roots: [orth-]
forms: [combining]
alphabet:: O
definition: [straight, erect, normal]
---
>[!Note] DEFINITION of orth-
>1. straight, erect
>2. normal
_____
>[!info]+ ETYMOLOGY of orth-
>#greek orthos
_____
>[!example]+ RELATED TERMS to orth-
>
>| [[orth-]] | straight | erect | normal |        -        |
|:---------:|:--------:|:-----:|:------:|:---------------:|
|  [[eu-]]  |    -     |   -   |  YES   | good, healthy |
_____
>[!tip]+ DERIVATIONS of orth-
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
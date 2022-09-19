---
tags: [" #medroot"]
aliases: []
forms: [suffix, adj]
roots: [-ous]
alphabet:: O
definition: [pertaining to, characterized by, full of]
---
>[!Note] DEFINITION of -ous
>forms adjectives: pertaining to, characterized by, full of
_____
>[!info]+ ETYMOLOGY of -ous
>#latin
_____
>[!example]+ RELATED TERMS to -ous
>
>| [[-ous]]  |   pertaining to   | characterized by | full of |         -          |         -          |
|:---------:|:-----------------:|:----------------:|:-------:|:------------------:|:------------------:|
|  [[-ac]]  |        YES        |        -         |    -    |     located in     |         -          |
|  [[-al]]  |        YES        |        -         |    -    |     located in     |         -          |
|  [[-an]]  |        YES        |        -         |    -    |     located in     |         -          |
|  [[-ar]]  |        YES        |        -         |    -    |     located in     |         -          |
| [[-ary]]  |        YES        |        -         |    -    |     place for      |         -          |
| [[-eal]]  |        YES        |        -         |    -    |     located in     |         -          |
| [[-ean]]  |        YES        |        -         |    -    |     located in     |         -          |
| [[-etic]] |        YES        |        -         |    -    |         -          |         -          |
|  [[-ic]]  |        YES        |        -         |    -    |         -          |         -          |
|  [[-id]]  |        YES        |        -         |    -    |   condition (of)   |     state (of)     |
| [[ile-]]  |        YES        |        -         |    -    | capable of (being) |        like        |
| [[-ine]]  |        YES        |        -         |    -    |     located in     |         -          |
| [[-itic]] | (to inflammation) |        -         |    -    |        drug        |       agent        |
| [[-ive]]  |        YES        |        -         |    -    |         -          |         -          |
| [[-lent]] |         -         |        -         |   YES   |         -          |         -          |
| [[-ose]]  |         -         |        -         |   YES   |     resembling     | chemical substance |
| [[-otic]] |        YES        |        -         |    -    |         -          |         -          |
| [[-tic]]  |        YES        |        -         |    -    |        drug        |    agent/person    |
_____
>[!tip]+ DERIVATIONS of -ous
>```dataview
TABLE definition AS Definition 
WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
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
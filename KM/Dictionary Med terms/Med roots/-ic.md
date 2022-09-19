---
tags: [" #medroot"]
aliases: []
roots: [-ic]
forms: [suffix, adjective, noun]
alphabet:: I
definition: [pertaining to, drug, agent]
---
>[!Note] DEFINITION of -ic
>1. forms adjectives: pertaining to
>2. forms nouns: drug, agent
_____
>[!info]+ ETYMOLOGY of -ic
>#latin
>#greek
_____
>[!example]+ RELATED TERMS to -ic
>
|   [[-ic]]    |   pertaining to   | drug | agent |         -          |     -      |
|:------------:|:-----------------:|:----:|:-----:|:------------------:|:----------:|
|   [[-ac]]    |        YES        |  -   |   -   |     located in     |     -      |
|   [[-al]]    |        YES        |  -   |   -   |     located in     |     -      |
|   [[-an]]    |        YES        |  -   |   -   |     located in     |     -      |
|   [[-ar]]    |        YES        |  -   |   -   |     located in     |     -      |
|   [[-ary]]   |        YES        |  -   |   -   |     place for      |     -      |
|   [[-eal]]   |        YES        |  -   |   -   |     located in     |     -      |
|   [[-ean]]   |        YES        |  -   |   -   |     located in     |     -      |
|  [[-etic]]   |        YES        |  -   |   -   |         -          |     -      |
|   [[-id]]    |        YES        |  -   |   -   |   condition (of)   | state (of) |
|   [[-ile]]   |        YES        |  -   |   -   | capable of (being) |    like    |
|   [[-ine]]   |        YES        |  -   |   -   |     located in     |     -      |
|  [[-itic]]   | (to inflammation) | YES  |  YES  |         -          |     -      |
|   [[-ive]]   |        YES        |  -   |   -   |         -          |     -      |
|  [[-ment]]   |         -         |  -   |  YES  |     instrument     |     -      |
|   [[-or]]    |         -         |  -   |  YES  |     instrument     |     -      |
|  [[-otic]]   |        YES        |  -   |   -   |         -          |     -      |
|   [[-ous]]   |        YES        |  -   |   -   |  characterized by  |  full of   |
| [[pharmac-]] |         -         |  -   |  YES  |      medicine      |     -      |
|   [[-tic]]   |        YES        | YES  |  YES  |       person       |            |
_____
>[!tip]+ DERIVATIONS of -ic
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
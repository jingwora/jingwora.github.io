---
tags: [" #medroot"]
aliases: []
roots: [-itic]
forms: [suffix, adjective, noun]
alphabet:: I
definition: [pertaining to, pertaining to inflamation, drug, agent]
---
>[!Note] DEFINITION of -itic
>1. forms adjectives: pertaining to (often inflamation)
>2. forms nouns: drug, agent
>*see also: [[-itis]]*
_____
>[!info]+ ETYMOLOGY of -itic
>#greek
_____
>[!example]+ RELATED TERMS to -itic
>
>|   [[-itic]]    |   pertaining to (often inflamation)   | drug | agent |         -          |     -      |
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
|  [[-ic]]   | YES | YES  |  YES  |         -          |     -      |
|   [[-ive]]   |        YES        |  -   |   -   |         -          |     -      |
|  [[-ment]]   |         -         |  -   |  YES  |     instrument     |     -      |
|   [[-or]]    |         -         |  -   |  YES  |     instrument     |     -      |
|  [[-otic]]   |        YES        |  -   |   -   |         -          |     -      |
|   [[-ous]]   |        YES        |  -   |   -   |  characterized by  |  full of   |
| [[pharmac-]] |         -         |  -   |  YES  |      medicine      |     -      |
|   [[-tic]]   |        YES        | YES  |  YES  |       person       |            |
>
_____
>[!tip]+ DERIVATIONS of -itic
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
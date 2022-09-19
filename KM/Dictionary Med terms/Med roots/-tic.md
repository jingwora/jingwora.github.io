---
tags: [" #medroot"]
aliases: []
roots: [-tic]
forms: [suffix, adjective, noun]
alphabet:: T
definition: [pertaining to, drug, agent, person]
---
>[!Note] DEFINITION of -tic
>1. forms adjectives from nouns ending in [[-sis]]: pertaining to
>2. forms nouns: drug, agent
>3. forms nouns: person living with a certain disability
_____
>[!info]+ ETYMOLOGY of -tic
_____
>[!example]+ RELATED TERMS to -tic
>
>| [[-tic]]  |   pertaining to   | drug | agent | person |         -          |     -      |
|:---------:|:-----------------:|:----:|:-----:|:------:|:------------------:|:----------:|
|  [[-ac]]  |        YES        |  -   |   -   |   -    |     located in     |     -      |
|  [[-al]]  |        YES        |  -   |   -   |   -    |     located in     |     -      |
|  [[-an]]  |        YES        |  -   |   -   |   -    |     located in     |     -      |
|  [[-ar]]  |        YES        |  -   |   -   |   -    |     located in     |     -      |
| [[-ary]]  |        YES        |  -   |   -   |   -    |     place for      |     -      |
| [[-eal]]  |        YES        |  -   |   -   |   -    |     located in     |     -      |
| [[-ean]]  |        YES        |  -   |   -   |   -    |     located in     |     -      |
| [[-etic]] |        YES        |  -   |   -   |   -    |         -          |     -      |
|  [[-ic]]  |        YES        | YES  |  YES  |   -    |         -          |     -      |
|  [[-id]]  |        YES        |  -   |   -   |   -    |   condition (of)   | state (of) |
| [[-ile]]  |        YES        |  -   |   -   |   -    | capable of (being) |    like    |
| [[-ine]]  |        YES        |  -   |   -   |   -    |     located in     |     -      |
| [[-itic]] | (to inflammation) | YES  |  YES  |   -    |         -          |     -      |
| [[-ive]]  |        YES        |  -   |   -   |   -    |         -          |     -      |
| [[-ment]] |         -         |  -   |  YES  |   -    |     instrument     |     -      |
|  [[-or]]  |         -         |  -   |  YES  |   -    |     instrument     |     -      |
| [[-otic]] |        YES        |  -   |   -   |   -    |         -          |     -      |
| [[-ous]]  |        YES        |  -   |   -   |   -    |  characterized by  |  full of   |
|  [[-us]]  |         -         |  -   |   -   |  YES   |     condition      | -           |
_____
>[!tip]+ DERIVATIONS of -tic
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
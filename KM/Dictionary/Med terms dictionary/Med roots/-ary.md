---
tags: [" #medroot"]
aliases: []
roots: [-ary]
forms: [suffix, adjective]
alphabet:: A
definition: [pertaining to, place for]
---
>[!Note] DEFINITION of -ary
>1. forms adjectives: pertaining to
>2. forms nouns: place for
_____
>[!info]+ ETYMOLOGY of -ary
>#latin
_____
>[!example]+ RELATED TERMS to -ary
>
|  [[-ary]]  |   pertaining to   | place for |         -          |      -       |
|:----------:|:-----------------:|:---------:|:------------------:|:------------:|
| [[-arium]] |         -         |    YES    |         -          |      -       |
|  [[-ar]]   |        YES        |     -     |     located in     |      -       |
|  [[-an]]   |        YES        |     -     |     located in     |      -       |
|  [[-al]]   |        YES        |     -     |     located in     |      -       |
|  [[-ac]]   |        YES        |     -     |     located in     |      -       |
|  [[-eal]]  |        YES        |     -     |     located in     |      -       |
|  [[-ean]]  |        YES        |     -     |     located in     |      -       |
| [[-etic]]  |        YES        |     -     |         -          |      -       |
|  [[-ic]]   |        YES        |     -     |        drug        |    agent     |
|  [[-id]]   |        YES        |     -     |   condition (of)   |  state (of)  |
|  [[-ile]]  |        YES        |     -     | capable of (being) |     like     |
|  [[-ine]]  |        YES        |     -     |     located in     |      -       |
| [[-itic]]  | (to inflammation) |     -     |        drug        |    agent     |
|  [[-ive]]  |        YES        |     -     |         -          |      -       |
| [[-orium]] |         -         |    YES    |         -          |      -       |
|  [[-ory]]  |         -         |    YES    |         -          |      -       |
| [[-otic]]  |        YES        |     -     |         -          |      -       |
|  [[-ous]]  |        YES        |     -     |  characterized by  |   full of    |
|  [[-tic]]  |        YES        |     -     |        drug        | agent/person |
_____
>[!tip]+ DERIVATIONS of -ary
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query functionality
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
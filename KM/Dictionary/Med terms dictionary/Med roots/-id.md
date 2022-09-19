---
tags: [" #medroot"]
aliases: []
roots: [-id]
forms: [suffix, adjective]
alphabet:: I
definition: [pertaining to, state of, condition of]
---
>[!Note] DEFINITION of -id
>1. forms adjectives: pertaining to
>2. forms adjectives: in a state or condition of
>Not to be confused with [[-oid|-(o)id]] (resembling)
_____
>[!info]+ ETYMOLOGY of -id
>#latin
_____
>[!example]+ RELATED TERMS to -id
>
>|  [[-id]]  |   pertaining to   | condition (of) | state (of) |         -          |       -       |
|:---------:|:-----------------:|:--------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |       -        |     -      |     located in     |       -       |
|  [[-al]]  |        YES        |       -        |     -      |     located in     |       -       |
|  [[-an]]  |        YES        |       -        |     -      |     located in     |       -       |
|  [[-ar]]  |        YES        |       -        |     -      |     located in     |       -       |
| [[-ary]]  |        YES        |       -        |     -      |     place for      |       -       |
| [[-eal]]  |        YES        |       -        |     -      |     located in     |       -       |
| [[-ean]]  |        YES        |       -        |     -      |     located in     |       -       |
| [[-etic]] |        YES        |       -        |     -      |         -          |       -       |
|  [[-ic]]  |        YES        |       -        |     -      |        drug        |     agent     |
| [[-ile]]  |        YES        |       -        |     -      | capable of (being) |     like      |
| [[-ine]]  |        YES        |       -        |     -      |     located in     |       -       |
| [[-itic]] | (to inflammation) |       -        |     -      |        drug        |     agent     |
| [[-ive]]  |        YES        |       -        |     -      |         -          |       -       |
| [[-otic]] |        YES        |       -        |     -      |         -          |       -       |
| [[-ous]]  |        YES        |       -        |     -      |  characterized by  |    full of    |
| [[-tic]]  |        YES        |       -        |     -      |        drug        | agent, person |
_____
>[!tip]+ DERIVATIONS of -id
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0
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
---
tags: [" #medroot"]
aliases: []
roots: [-ive]
forms: [suffix, adjective]
alphabet:: I
definition: [pertaining to]
---
>[!Note] DEFINITION of -ive
>forms adjectives: pertaining to
_____
>[!info]+ ETYMOLOGY of -ive
>#latin
_____
>[!example]+ RELATED TERMS to -ive
>
>|  [[-ive]]  |   pertaining to   | - |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-ac]]  |        YES        |    located in     |         -          |       -       |
|  [[-an]]  |        YES        |    located in     |         -          |       -       |
|  [[-ar]]  |        YES        |    located in     |         -          |       -       |
| [[-ary]]  |        YES        |     -      |     place for      |       -       |
| [[-al]]  |        YES        |    located in     |         -          |       -       |
| [[-eal]]  |        YES        |    located in     |         -          |       -       |
| [[-etic]] |        YES        |     -      |         -          |       -       |
|  [[-ic]]  |        YES        |     -      |        drug        |     agent     |
|  [[-id]]  |        YES        |     -      |   condition (of)   |  state (of)   |
| [[-ile]]  |        YES        |     -      | capable of (being) |     like      |
| [[-ean]]  |        YES        |    located in     |         -          |       -       |
| [[-itic]] | (to inflammation) |     -      |        drug        |     agent     |
| [[-ine]]  |        YES        |     -      |         -          |       -       |
| [[-otic]] |        YES        |     -      |         -          |       -       |
| [[-ous]]  |        YES        |     -      |  characterized by  |    full of    |
| [[-tic]]  |        YES        |     -      |        drug        | agent, person |
_____
>[!tip]+ DERIVATIONS of -ive
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
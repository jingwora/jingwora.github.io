---
tags: [" #medroot"]
aliases: []
roots: [-otic]
forms: [suffix, adjective]
alphabet:: O
definition: [pertaining to]
---
>[!Note] DEFINITION of -otic
>forms adjectives from nouns: pertaining to (modifies [[-osis]])
_____
>[!info]+ ETYMOLOGY of -otic
>#greek
_____
>[!example]+ RELATED TERMS to -otic
>
>|  [[-otic]]  |   pertaining to   | - |         -          |       -       |
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
| [[-ive]] |        YES        |     -      |         -          |       -       |
| [[-ous]]  |        YES        |     -      |  characterized by  |    full of    |
| [[-tic]]  |        YES        |     -      |        drug        | agent, person |
_____
>[!tip]+ DERIVATIONS of -otic
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
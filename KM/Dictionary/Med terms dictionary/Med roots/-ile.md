---
tags: [" #medroot"]
aliases: []
roots: [-ile]
forms: [suffix, adjective]
alphabet:: I
definition: [pertaining to, capable of (being), like]
---
>[!Note] DEFINITION of -ile
>forms adjectives: pertaining to, capable of (being), like
_____
>[!info]+ ETYMOLOGY of -ile
>#latin
_____
>[!example]+ RELATED TERMS to -ile
>
>| [[-ile]]  |   pertaining to   | capable of (being) | like |        -         |      -       |
|:---------:|:-----------------:|:------------------:|:----:|:----------------:|:------------:|
| [[-able]] |         -         |        YES         |  -   |     able to      |      -       |
|  [[-ac]]  |        YES        |         -          |  -   |    located in    |      -       |
|  [[-al]]  |        YES        |         -          |  -   |    located in    |      -       |
|  [[-an]]  |        YES        |         -          |  -   |    located in    |      -       |
|  [[-ar]]  |        YES        |         -          |  -   |    located in    |      -       |
| [[-ary]]  |        YES        |         -          |  -   |    place for     |      -       |
| [[-eal]]  |        YES        |         -          |  -   |    located in    |      -       |
| [[-ean]]  |        YES        |         -          |  -   |    located in    |      -       |
| [[-etic]] |        YES        |         -          |  -   |        -         |      -       |
| [[-ible]] |         -         |        YES         |  -   |        -         |      -       |
|  [[-ic]]  |        YES        |         -          |  -   |       drug       |    agent     |
|  [[-id]]  |        YES        |         -          |  -   |  condition (of)  |  state (of)  |
| [[-ine]]  |        YES        |         -          |  -   |    located in    |      -       |
| [[-itic]] | (to inflammation) |         -          |  -   |       drug       |    agent     |
| [[-ive]]  |        YES        |         -          |  -   |        -         |      -       |
| [[-otic]] |        YES        |         -          |  -   |        -         |      -       |
| [[-ous]]  |        YES        |         -          |  -   | characterized by |   full of    |
| [[-tic]]  |        YES        |         -          |  -   |       drug       | agent/person |
_____
>[!tip]+ DERIVATIONS of -ile
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
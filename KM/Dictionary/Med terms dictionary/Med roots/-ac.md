---
tags: [" #medroot"]
aliases: []
roots: [-ac]
forms: [suffix, adjective]
alphabet:: A
definition: [pertaining to, located in]
---
>[!Note] DEFINITION of -ac
>forms adjectives: pertaining to, located in
_____
>[!info]+ ETYMOLOGY of -ac
>#greek
_____
>[!example]+ RELATED TERMS to -ac
>
>|  [[-ac]]  |   pertaining to   | located in |         -          |       -       |
|:---------:|:-----------------:|:----------:|:------------------:|:-------------:|
|  [[-al]]  |        YES        |    YES     |         -          |       -       |          
|  [[-an]]  |        YES        |    YES     |         -          |       -       |          
|  [[-ar]]  |        YES        |    YES     |         -          |       -       |          
| [[-ary]]  |        YES        |     -      |     place for      |       -       |          
| [[-eal]]  |        YES        |    YES     |         -          |       -       |          
| [[-ean]]  |        YES        |    YES     |         -          |       -       |          
| [[-etic]] |        YES        |     -      |         -          |       -       |          
|  [[-ic]]  |        YES        |     -      |        drug        |     agent     |          
|  [[-id]]  |        YES        |     -      |   condition (of)   |  state (of)   |          
| [[-ile]]  |        YES        |     -      | capable of (being) |     like      |          
| [[-ine]]  |        YES        |    YES     |         -          |       -       |          
| [[-itic]] | (to inflammation) |     -      |        drug        |     agent     |          
| [[-ive]]  |        YES        |     -      |         -          |       -       |          
| [[-otic]] |        YES        |     -      |         -          |       -       |          
| [[-ous]]  |        YES        |     -      |  characterized by  |    full of    |          
| [[-tic]]  |        YES        |     -      |        drug        | agent, person |          
_____
>[!tip]+ DERIVATIONS of -ac
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____ 
>[!faq]- Query functionality
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]



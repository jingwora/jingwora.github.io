---
tags: [" #medroot"]
aliases: []
roots: [-one]
forms: [suffix]
alphabet:: O
definition: [chemical substance]
---
>[!Note] DEFINITION of -one
>forms nouns: chemical substance
_____
>[!info]+ ETYMOLOGY of -one
>#greek
_____
>[!example]+ RELATED TERMS to -one
>
>| [[-one]] | chemical substance | - |    -    |
|:--------:|:------------------:|:------------------------------:|:-------:|
| [[-ate]] |        YES         |               -                |    -    |
| [[-id]] |        YES         |               -                |    -    |
| [[-ite]] |        YES         |               -                |    -    |
| [[-ose]] |        YES         |          resembling          | full of |
_____
>[!tip]+ DERIVATIONS of -one
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
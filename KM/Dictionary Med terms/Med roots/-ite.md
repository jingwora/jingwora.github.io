---
tags: [" #medroot"]
aliases: []
roots: [-ite]
forms: [suffix]
alphabet:: I
definition: [chemical substance]
---
>[!Note] DEFINITION of -ite
>chemical substance
_____
>[!info]+ ETYMOLOGY of -ite
>#greek
_____
>[!example]+ RELATED TERMS to -ite
>
| [[-ite]] | chemical substance | - |    -    |
|:--------:|:------------------:|:------------------------------:|:-------:|
| [[-ate]] |        YES         |               -                |    -    |
| [[-id]] |        YES         |               -                |    -    |
| [[-one]] |        YES         |               -                |    -    |
| [[-ose]] |        YES         |          resembling          | full of |
_____
>[!tip]+ DERIVATIONS of -ite
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
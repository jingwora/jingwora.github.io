---
tags: [" #medroot"]
aliases: []
roots: [-ide]
forms: [suffix]
alphabet:: I
definition: [chemical substance]
---
>[!Note] DEFINITION of -ide
>chemical substance
_____
>[!info]+ ETYMOLOGY of -ide
>#greek
_____
>[!example]+ RELATED TERMS to -ide
>
| [[-ide]] | chemical substance | having the form of, possessing |    -    |
|:--------:|:------------------:|:------------------------------:|:-------:|
| [[-ate]] |        YES         |               -                |    -    |
| [[-ite]] |        YES         |               -                |    -    |
| [[-one]] |        YES         |               -                |    -    |
| [[-ose]] |        YES         |          (resembling)          | full of |
>
_____
>[!tip]+ DERIVATIONS of -ide
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
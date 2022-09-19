---
tags: [" #medroot"]
aliases: []
roots: [-ate]
forms: [suffix]
alphabet:: A
definition: [chemical substance, having the form of, possessing]
---
>[!Note] DEFINITION of -ate
>1. chemical substance
>2. having the form of, possessing
_____
>[!info]+ ETYMOLOGY of -ate
>#greek
>#latin
_____
>[!example]+ RELATED TERMS to -ate
>
| [[-ate]] | chemical substance | having the form of, possessing |    -    |
|:--------:|:------------------:|:------------------------------:|:-------:|
| [[-ide]] |        YES         |               -                |    -    |
| [[-ite]] |        YES         |               -                |    -    |
| [[-one]] |        YES         |               -                |    -    |
| [[-ose]] |        YES         |          (resembling)          | full of |
_____
>[!tip]+ DERIVATIONS of -ate
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
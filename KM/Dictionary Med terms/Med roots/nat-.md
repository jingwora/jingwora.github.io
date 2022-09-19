---
tags: [" #medroot"]
aliases: []
roots: [nat-]
forms: [combining]
alphabet:: N
definition: [be born]
---
>[!Note] DEFINITION of nat-
>be born
_____
>[!info]+ ETYMOLOGY of nat-
>#latin (g)nasci, natus
_____
>[!example]+ RELATED TERMS to nat-
>
>| [[nat-]] | be born |
|:--------:|:-------:|
| [[-gn-]] |   YES   |
_____
>[!tip]+ DERIVATIONS of nat-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
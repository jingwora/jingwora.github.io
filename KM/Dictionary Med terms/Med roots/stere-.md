---
tags: [" #medroot"]
aliases: []
roots: [stere-]
forms: [combining]
alphabet:: S
definition: [solid, having three dimensions, 3d]
---
>[!Note] DEFINITION of stere-
>solid, having three dimensions
>*see also: [[-form]]*
_____
>[!info]+ ETYMOLOGY of stere-
>#greek stereos
_____
>[!example]+ RELATED TERMS to stere-
>
_____
>[!tip]+ DERIVATIONS of stere-
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
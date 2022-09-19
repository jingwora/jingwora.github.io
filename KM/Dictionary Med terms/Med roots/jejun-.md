---
tags: [" #medroot"]
aliases: []
roots: [jejun-]
forms: [combining]
alphabet:: I
definition: [jejunum]
---
>[!Note] DEFINITION of jejun-
>jejunum
>*see also: [[enter-]] (small intestine), [[duoden-]], [[ile-]]*
_____
>[!info]+ ETYMOLOGY of jejun-
>#latin jejunus (empty)
_____
>[!example]+ RELATED TERMS to jejun-
>
_____
>[!tip]+ DERIVATIONS of jejun-
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
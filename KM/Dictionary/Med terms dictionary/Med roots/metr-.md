---
tags: [" #medroot"]
aliases: []
roots: [metr-]
forms: [combining]
alphabet:: M
definition: [measure]
---
>[!Note] DEFINITION of metr-
>measure
>*see also: [[-meter]]
>not to be confused with: [[-metra|metr_-]]*
_____
>[!info]+ ETYMOLOGY of metr-
>#greek metron
_____
>[!example]+ RELATED TERMS to metr-
>
_____
>[!tip]+ DERIVATIONS of metr-
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
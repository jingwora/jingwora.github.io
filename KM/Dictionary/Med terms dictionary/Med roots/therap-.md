---
tags: [" #medroot"]
aliases: [therapeu]
roots: [therap-, therapeu]
forms: [combining]
alphabet:: T
definition: [treat medically, heal]
---
>[!Note] DEFINITION of therap-
>treat medically, heal
>*see also: [[iatr-]] (treatment)*
_____
>[!info]+ ETYMOLOGY of therap-
>#greek therapeuin
_____
>[!example]+ RELATED TERMS to therap-
>
_____
>[!tip]+ DERIVATIONS of therap-
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
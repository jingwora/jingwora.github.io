---
tags: [" #medroot"]
aliases: [tume-]
roots: [tum-, tume-]
forms: [combining]
alphabet:: T
definition: [be swollen]
---
>[!Note] DEFINITION of tum-
> be swollen
> *see also: [[edema]] (swelling), [[-cel-]] (swelling)*
_____
>[!info]+ ETYMOLOGY of tum-
>#latin tumere
_____
>[!example]+ RELATED TERMS to tum-
>
_____
>[!tip]+ DERIVATIONS of tum-
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
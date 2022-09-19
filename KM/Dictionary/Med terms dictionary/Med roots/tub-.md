---
tags: [" #medroot"]
aliases: []
roots: [tub-]
forms: [combining]
alphabet:: T
definition: [tube]
---
>[!Note] DEFINITION of tub-
>tube
>*see also: [[por-]] (pore), [[-doch-]] (duct)*
_____
>[!info]+ ETYMOLOGY of tub-
>#latin tuba (trumpet)
_____
>[!example]+ RELATED TERMS to tub-
>
_____
>[!tip]+ DERIVATIONS of tub-
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
---
tags: [" #medroot"]
aliases: []
roots: [helc-]
forms: [combining]
alphabet:: H
definition: [ulcer]
---
>[!Note] DEFINITION of helc-
>ulcer
>*see also: [[elc-]] (ulcer)*
_____
>[!info]+ ETYMOLOGY of helc-
>#greek helkos
_____
>[!example]+ RELATED TERMS to helc-
>
_____
>[!tip]+ DERIVATIONS of helc-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
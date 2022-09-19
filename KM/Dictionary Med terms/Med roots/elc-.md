---
tags: [" #medroot"]
aliases: []
roots: [elc-]
forms: [combining]
alphabet:: E
definition: [ulcer]
---
>[!Note] DEFINITION of elc-
>ulcer
>*see also: [[helc-]] (ulcer)*
_____
>[!info]+ ETYMOLOGY of elc-
>#greek helkos
_____
>[!example]+ RELATED TERMS to elc-
>
_____
>[!tip]+ DERIVATIONS of elc-
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
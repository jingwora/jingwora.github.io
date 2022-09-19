---
tags: [" #medroot"]
aliases: [trache-, trachy-]
roots: [trach-, trache-, trachy-]
forms: [combining]
alphabet:: T
definition: [trachea]
---
>[!Note] DEFINITION of trach-
>trachea
>*see also: [[trachel-]] (neck)*
_____
>[!info]+ ETYMOLOGY of trach-
>#greek trachys (rough)
_____
>[!example]+ RELATED TERMS to trach-
>
_____
>[!tip]+ DERIVATIONS of trach-
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
---
tags: [" #medroot"]
aliases: []
roots: [ur-]
forms: [combining]
alphabet:: U
definition: [urine, urinary tract, uric acid]
---
>[!Note] DEFINITION of ur-
>1. urine, urinary tract
>2. uric acid
_____
>[!info]+ ETYMOLOGY of ur-
>#greek ouron
_____
>[!example]+ RELATED TERMS to ur-
>
_____
>[!tip]+ DERIVATIONS of ur-
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
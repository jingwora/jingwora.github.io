---
tags: [" #medroot"]
aliases: []
roots: [cycle-]
forms: [combining]
alphabet:: C
definition: [circle, ciliary body]
---
>[!Note] DEFINITION of cycle-
>1. circle
>2. ciliary body
_____
>[!info]+ ETYMOLOGY of cycle-
>#greek kyklos
_____
>[!example]+ RELATED TERMS to cycle-
>
_____
>[!tip]+ DERIVATIONS of cycle-
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
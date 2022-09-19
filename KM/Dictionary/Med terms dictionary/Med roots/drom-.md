---
tags: [" #medroot"]
aliases: []
roots: [drom-]
forms: [combining]
alphabet:: D
definition: [a running, running]
---
>[!Note] DEFINITION of drom-
>a running, running
_____
>[!info]+ ETYMOLOGY of drom-
>#greek dromos
_____
>[!example]+ RELATED TERMS to drom-
>
_____
>[!tip]+ DERIVATIONS of drom-
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
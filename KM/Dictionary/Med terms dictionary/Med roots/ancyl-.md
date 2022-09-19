---
tags: [" #medroot"]
aliases: [ankyl-]
roots: [ancyl-, ankyl-]
forms: [combining]
alphabet:: A
definition: [fused, stiffened, hooked, crooked]
---
>[!Note] DEFINITION of ancyl-
>1. fused, stiffened
>2. hooked, crooked
_____
>[!info]+ ETYMOLOGY of ancyl-
>#greek ankylos
_____
>[!example]+ RELATED TERMS to ancyl-
_____
>[!tip]+ DERIVATIONS of ancyl-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
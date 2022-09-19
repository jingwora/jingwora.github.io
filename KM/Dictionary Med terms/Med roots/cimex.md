---
tags: [" #medroot"]
aliases: []
roots: [cimex]
forms: [combining]
alphabet:: C
definition: [bug]
---
>[!Note] DEFINITION of cimex
>bug
_____
>[!info]+ ETYMOLOGY of cimex
>#latin cimex
_____
>[!example]+ RELATED TERMS to cimex
>	
_____
>[!tip]+ DERIVATIONS of cimex
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!FAQ]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
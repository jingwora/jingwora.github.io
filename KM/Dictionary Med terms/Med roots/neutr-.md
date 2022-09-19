---
tags: [" #medroot"]
aliases: []
roots: [neutr-]
forms: [combining]
alphabet:: N
definition: [neither]
---
>[!Note] DEFINITION of neutr-
>neither
_____
>[!info]+ ETYMOLOGY of neutr-
>#latin neuter
_____
>[!example]+ RELATED TERMS to neutr-
>
_____
>[!tip]+ DERIVATIONS of neutr-
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
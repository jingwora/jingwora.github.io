---
tags: [" #medroot"]
aliases: []
roots: [necr-]
forms: [combining]
alphabet:: N
definition: [corpse, dead]
---
>[!Note] DEFINITION of necr-
>corpse, dead
>*see also: [[sapr-]]*
_____
>[!info]+ ETYMOLOGY of necr-
>#greek nekros
_____
>[!example]+ RELATED TERMS to necr-
>
_____
>[!tip]+ DERIVATIONS of necr-
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
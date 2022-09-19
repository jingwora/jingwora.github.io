---
tags: [" #medroot"]
aliases: []
roots: [spondyl-]
forms: [combining]
alphabet:: S
definition: [vertebra]
---
>[!Note] DEFINITION of spondyl-
>vertebra
_____
>[!info]+ ETYMOLOGY of spondyl-
>#greek spondylos
_____
>[!example]+ RELATED TERMS to spondyl-
>
_____
>[!tip]+ DERIVATIONS of spondyl-
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
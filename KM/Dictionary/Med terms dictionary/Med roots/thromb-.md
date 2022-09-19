---
tags: [" #medroot"]
aliases: []
roots: [thromb-]
forms: [combining]
alphabet:: T
definition: [blood clot]
---
>[!Note] DEFINITION of thromb-
>blood clot
_____
>[!info]+ ETYMOLOGY of thromb-
>#greek thrombos
_____
>[!example]+ RELATED TERMS to thromb-
>
_____
>[!tip]+ DERIVATIONS of thromb-
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
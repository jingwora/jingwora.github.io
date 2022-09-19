---
tags: [" #medroot"]
aliases: []
roots: [tel-]
forms: [combining]
alphabet:: T
definition: [end, completion]
---
>[!Note] DEFINITION of tel-
>end, completion
_____
>[!info]+ ETYMOLOGY of tel-
>#greek telos
_____
>[!example]+ RELATED TERMS to tel-
>
_____
>[!tip]+ DERIVATIONS of tel-
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
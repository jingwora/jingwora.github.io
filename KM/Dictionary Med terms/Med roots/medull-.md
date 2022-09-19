---
tags: [" #medroot"]
aliases: []
roots: [medull-]
forms: [combining]
alphabet:: M
definition: [marrow]
---
>[!Note] DEFINITION of medull-
>marrow
_____
>[!info]+ ETYMOLOGY of medull-
>#latin medulla
_____
>[!example]+ RELATED TERMS to medull-
>
_____
>[!tip]+ DERIVATIONS of medull-
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
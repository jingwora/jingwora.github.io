---
tags: [" #medroot"]
aliases: []
roots: [glob-]
forms: [combining]
alphabet:: G
definition: [round body, globe]
---
>[!Note] DEFINITION of glob-
>round body, globe
_____
>[!info]+ ETYMOLOGY of glob-
>#latin globus
_____
>[!example]+ RELATED TERMS to glob-
>
_____
>[!tip]+ DERIVATIONS of glob-
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
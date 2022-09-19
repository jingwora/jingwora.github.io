---
tags: [" #medroot"]
aliases: []
roots: [coron-]
forms: [combining]
alphabet:: C
definition: [crown]
---
>[!Note] DEFINITION of coron-
>crown
_____
>[!info]+ ETYMOLOGY of coron-
>#latin corona
_____
>[!example]+ RELATED TERMS to coron-
>
_____
>[!tip]+ DERIVATIONS of coron-
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
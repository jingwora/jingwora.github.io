---
tags: [" #medroot"]
aliases: []
roots: [myel-]
forms: [combining]
alphabet:: M
definition: [bone marrow, spinal cord, myelin]
---
>[!Note] DEFINITION of myel-
>bone marrow, spinal cord, myelin
>[!info]+ ETYMOLOGY of myel-
>#greek myelos
_____
>[!example]+ RELATED TERMS to myel-
>
_____
>[!tip]+ DERIVATIONS of myel-
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
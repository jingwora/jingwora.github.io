---
tags: [" #medroot"]
aliases: []
roots: [cente-]
forms: [combining]
alphabet:: C
definition: [pierce]
---
>[!Note] DEFINITION of cente-
>pierce
_____
>[!info]+ ETYMOLOGY of cente-
>#greek kentein
_____
>[!example]+ RELATED TERMS to cente-
>
_____
>[!tip]+ DERIVATIONS of cente-
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
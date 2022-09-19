---
tags: [" #medroot"]
aliases: []
roots: [acr-]
forms: [combining]
alphabet:: A
definition: [extremities]
---
>[!Note] DEFINITION of acr-
>extremities (particularly hands and feet)
_____
>[!info]+ ETYMOLOGY of acr-
>#greek akron (highest point)
_____
>[!example]+ RELATED TERMS to acr-
>
_____
>[!tip]+ DERIVATIONS of acr-
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
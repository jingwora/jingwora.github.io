---
tags: [" #medroot"]
aliases: []
roots: [thalam-]
forms: [combining]
alphabet:: T
definition: [thalamus]
---
>[!Note] DEFINITION of thalam-
>thalamus (inner chamber)
_____
>[!info]+ ETYMOLOGY of thalam-
>#greek thalamos (inner chamber)
_____
>[!example]+ RELATED TERMS to thalam-
>
_____
>[!tip]+ DERIVATIONS of thalam-
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
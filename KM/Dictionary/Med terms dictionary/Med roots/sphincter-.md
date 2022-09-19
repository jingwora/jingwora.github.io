---
tags: [" #medroot"]
aliases: []
roots: [sphincter-]
forms: [combining]
alphabet:: S
definition: [sphincter muscle]
---
>[!Note] DEFINITION of sphincter-
>sphincter muscle
_____
>[!info]+ ETYMOLOGY of sphincter-
>#greek sphincter
_____
>[!example]+ RELATED TERMS to sphincter-
>
_____
>[!tip]+ DERIVATIONS of sphincter-
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
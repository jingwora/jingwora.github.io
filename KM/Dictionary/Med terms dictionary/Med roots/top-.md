---
tags: [" #medroot"]
aliases: []
roots: [top-]
forms: [combining]
alphabet:: T
definition: [space]
---
>[!Note] DEFINITION of top-
>space
_____
>[!info]+ ETYMOLOGY of top-
>#greek topos
_____
>[!example]+ RELATED TERMS to top-
>
_____
>[!tip]+ DERIVATIONS of top-
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
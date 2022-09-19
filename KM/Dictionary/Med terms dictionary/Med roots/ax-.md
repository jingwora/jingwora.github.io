---
tags: [" #medroot"]
aliases: [axon-]
roots: [ax-, axon-]
forms: [combining]
alphabet:: A
definition: [axis, axon]
---
>[!Note] DEFINITION of ax-
>axis, axon
_____
>[!info]+ ETYMOLOGY of ax-
>#greek axon
_____
>[!example]+ RELATED TERMS to ax-
>
_____
>[!tip]+ DERIVATIONS of ax-
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
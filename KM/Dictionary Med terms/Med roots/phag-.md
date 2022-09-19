---
tags: [" #medroot"]
aliases: []
roots: [phag-]
forms: [combining]
alphabet:: E
definition: [swallow, eat]
---
>[!Note] DEFINITION of phag-
>swallow, eat
_____
>[!info]+ ETYMOLOGY of phag-
>#greek phagein
_____
>[!example]+ RELATED TERMS to phag-
>
_____
>[!tip]+ DERIVATIONS of phag-
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
---
tags: [" #medroot"]
aliases: []
roots: [narc-]
forms: [combining]
alphabet:: N
definition: [stupor, numbness]
---
>[!Note] DEFINITION of narc-
>stupor, numbness
_____
>[!info]+ ETYMOLOGY of narc-
>#greek narke
_____
>[!example]+ RELATED TERMS to narc-
>
_____
>[!tip]+ DERIVATIONS of narc-
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
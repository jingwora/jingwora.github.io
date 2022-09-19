---
tags: [" #medroot"]
aliases: []
roots: [-phil-]
forms: [combining]
alphabet:: P
definition: [love, have an affinity for]
---
>[!Note] DEFINITION of -phil-
>1. love
>2. have an affinity for
_____
>[!info]+ ETYMOLOGY of -phil-
>#greek philein
_____
>[!example]+ RELATED TERMS to -phil-
>
_____
>[!tip]+ DERIVATIONS of -phil-
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
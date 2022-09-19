---
tags: [" #medroot"]
aliases: []
roots: [ne-]
forms: [combining]
alphabet:: N
definition: [new]
---
>[!Note] DEFINITION of ne-
>new
_____
>[!info]+ ETYMOLOGY of ne-
>#greek neos
_____
>[!example]+ RELATED TERMS to ne-
>
_____
>[!tip]+ DERIVATIONS of ne-
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
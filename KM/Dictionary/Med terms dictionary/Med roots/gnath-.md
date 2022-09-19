---
tags: [" #medroot"]
aliases: []
roots: [gnath-]
forms: [combining]
alphabet:: G
definition: [jaw]
---
>[!Note] DEFINITION of gnath-
>(lower) jaw
_____
>[!info]+ ETYMOLOGY of gnath-
>#greek gnathos
_____
>[!example]+ RELATED TERMS to gnath-
>
_____
>[!tip]+ DERIVATIONS of gnath-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
---
tags: [" #medroot"]
aliases: []
roots: [nom-]
forms: [combining]
alphabet:: N
definition: [law]
---
>[!Note] DEFINITION of nom-
>law
_____
>[!info]+ ETYMOLOGY of nom-
>#greek nomos
_____
>[!example]+ RELATED TERMS to nom-
>
_____
>[!tip]+ DERIVATIONS of nom-
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
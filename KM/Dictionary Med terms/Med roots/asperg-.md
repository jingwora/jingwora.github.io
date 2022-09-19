---
tags: [" #medroot"]
aliases: []
roots: [asperg-]
forms: [combining]
alphabet:: A
definition: [sprinkle]
---
>[!Note] DEFINITION of asperg-
>sprinkle
_____
>[!info]+ ETYMOLOGY of asperg-
>#latin aspergere
_____
>[!example]+ RELATED TERMS to asperg-
>
_____
>[!tip]+ DERIVATIONS of asperg-
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
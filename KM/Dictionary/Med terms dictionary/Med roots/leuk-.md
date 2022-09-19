---
tags: [" #medroot"]
aliases: []
roots: [leuk-]
forms: [combining]
alphabet:: L
definition: [white, white blood cell]
---
>[!Note] DEFINITION of leuk-
>white, white blood cell
_____
>[!info]+ ETYMOLOGY of leuk-
>#greek leukos
_____
>[!example]+ RELATED TERMS to leuk-
>
_____
>[!tip]+ DERIVATIONS of leuk-
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
---
tags: [" #medroot"]
aliases: []
roots: [trep-]
forms: [combining]
alphabet:: T
definition: [turn, twist]
---
>[!Note] DEFINITION of trep-
>turn, twist
_____
>[!info]+ ETYMOLOGY of trep-
>#greek trepein
_____
>[!example]+ RELATED TERMS to trep-
>
_____
>[!tip]+ DERIVATIONS of trep-
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
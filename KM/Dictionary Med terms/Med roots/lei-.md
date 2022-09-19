---
tags: [" #medroot"]
aliases: []
roots: [lei-]
forms: [combining]
alphabet:: L
definition: [smooth]
---
>[!Note] DEFINITION of lei-
>smooth
_____
>[!info]+ ETYMOLOGY of lei-
>#greek leios
_____
>[!example]+ RELATED TERMS to lei-
>
_____
>[!tip]+ DERIVATIONS of lei-
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
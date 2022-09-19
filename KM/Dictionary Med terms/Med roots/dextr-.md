---
tags: [" #medroot"]
aliases: []
roots: [dextr-]
forms: [combining]
alphabet:: D
definition: [right]
---
>[!Note] DEFINITION of dextr-
>right (side)
_____
>[!info]+ ETYMOLOGY of dextr-
>#latin dexter
_____
>[!example]+ RELATED TERMS to dextr-
>
_____
>[!tip]+ DERIVATIONS of dextr-
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
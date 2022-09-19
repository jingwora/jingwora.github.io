---
tags: [" #medroot"]
aliases: []
roots: [sinistr-]
forms: [combining]
alphabet:: S
definition: [left]
---
>[!Note] DEFINITION of sinistr-
>left (side)
_____
>[!info]+ ETYMOLOGY of sinistr-
>#latin sinister
_____
>[!example]+ RELATED TERMS to sinistr-
>
_____
>[!tip]+ DERIVATIONS of sinistr-
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
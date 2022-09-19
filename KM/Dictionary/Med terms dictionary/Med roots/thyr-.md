---
tags: [" #medroot"]
aliases: []
roots: [thyr-]
forms: [combining]
alphabet:: T
definition: [thyroid gland]
---
>[!Note] DEFINITION of thyr-
>thyroid gland
_____
>[!info]+ ETYMOLOGY of thyr-
>#greek thyreos (shield)
_____
>[!example]+ RELATED TERMS to thyr-
>
_____
>[!tip]+ DERIVATIONS of thyr-
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
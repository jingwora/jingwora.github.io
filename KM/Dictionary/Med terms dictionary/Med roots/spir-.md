---
tags: [" #medroot"]
aliases: []
roots: [spir-]
forms: [combining]
alphabet:: S
definition: [coil, spiral]
---
>[!Note] DEFINITION of spir-
>coil, spiral
_____
>[!info]+ ETYMOLOGY of spir-
>#latin speira
_____
>[!example]+ RELATED TERMS to spir-
>
_____
>[!tip]+ DERIVATIONS of spir-
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
---
tags: [" #medroot"]
aliases: []
roots: [sthen-]
forms: [combining]
alphabet:: S
definition: [strength]
---
>[!Note] DEFINITION of sthen-
>strength
_____
>[!info]+ ETYMOLOGY of sthen-
>#greek sthenos
_____
>[!example]+ RELATED TERMS to sthen-
>
_____
>[!tip]+ DERIVATIONS of sthen-
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
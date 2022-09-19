---
tags: [" #medroot"]
aliases: []
roots: [brachi-]
forms: [combining]
alphabet:: b
definition: [arm]
---
>[!Note] DEFINITION of brachi-
>(upper) arm
_____
>[!info]+ ETYMOLOGY of brachi-
>#latin bracchium
_____
>[!example]+ RELATED TERMS to brachi-
>
_____
>[!tip]+ DERIVATIONS of brachi-
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
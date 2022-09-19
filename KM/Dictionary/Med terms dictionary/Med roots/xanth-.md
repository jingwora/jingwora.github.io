---
tags: [" #medroot"]
aliases: []
roots: [xanth-]
forms: [combining]
alphabet:: X
definition: [yellow]
---
>[!Note] DEFINITION of xanth-
>yellow
_____
>[!info]+ ETYMOLOGY of xanth-
>#greek xanthos
_____
>[!example]+ RELATED TERMS to xanth-
>
_____
>[!tip]+ DERIVATIONS of xanth-
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
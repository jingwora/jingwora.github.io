---
tags: [" #medroot"]
aliases: []
roots: [xer-]
forms: [combining]
alphabet:: X
definition: [dry]
---
>[!Note] DEFINITION of xer-
>dry
_____
>[!info]+ ETYMOLOGY of xer-
>#greek xeros
_____
>[!example]+ RELATED TERMS to xer-
>
_____
>[!tip]+ DERIVATIONS of xer-
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
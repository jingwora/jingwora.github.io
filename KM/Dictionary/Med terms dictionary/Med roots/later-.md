---
tags: [" #medroot"]
aliases: []
roots: [later-]
forms: [combining]
alphabet:: L
definition: [side]
---
>[!Note] DEFINITION of later-
>side
_____
>[!info]+ ETYMOLOGY of later-
>#latin latus, lateris
_____
>[!example]+ RELATED TERMS to later-
>
_____
>[!tip]+ DERIVATIONS of later-
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
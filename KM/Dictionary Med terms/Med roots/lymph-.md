---
tags: [" #medroot"]
aliases: []
roots: [lymph-]
forms: [combining]
alphabet:: L
definition: [lymph]
---
>[!Note] DEFINITION of lymph-
>lymph
_____
>[!info]+ ETYMOLOGY of lymph-
>#latin lympha (clear water)
_____
>[!example]+ RELATED TERMS to lymph-
>
_____
>[!tip]+ DERIVATIONS of lymph-
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
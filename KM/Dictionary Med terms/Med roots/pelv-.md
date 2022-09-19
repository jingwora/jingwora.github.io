---
tags: [" #medroot"]
aliases: []
roots: [pelv-]
forms: [combining]
alphabet:: P
definition: [pelvis]
---
>[!Note] DEFINITION of pelv-
>pelvis
_____
>[!info]+ ETYMOLOGY of pelv-
>#latin pelvis (basin)
_____
>[!example]+ RELATED TERMS to pelv-
>
_____
>[!tip]+ DERIVATIONS of pelv-
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
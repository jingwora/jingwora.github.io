---
tags: [" #medroot"]
aliases: []
roots: [iatr-]
forms: [combining]
alphabet:: I
definition: [healer, physician, treatment]
---
>[!Note] DEFINITION of iatr-
>1. healer, physician
>2. treatment
_____
>[!info]+ ETYMOLOGY of iatr-
>#greek iatros
_____
>[!example]+ RELATED TERMS to iatr-
>
_____
>[!tip]+ DERIVATIONS of iatr-
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
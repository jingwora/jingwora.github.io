---
tags: [" #medroot"]
aliases: []
roots: [taban-]
forms: [combining]
alphabet:: T
definition: [horsefly]
---
>[!Note] DEFINITION of taban-
>horsefly
_____
>[!info]+ ETYMOLOGY of taban-
>#latin tabanus
_____
>[!example]+ RELATED TERMS to taban-
>
_____
>[!tip]+ DERIVATIONS of taban-
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
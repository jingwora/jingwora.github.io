---
tags: [" #medroot"]
aliases: []
roots: [tax-]
forms: [combining]
alphabet:: T
definition: [coordination]
---
>[!Note] DEFINITION of tax-
>(muscular) coordination
_____
>[!info]+ ETYMOLOGY of tax-
>#greek (taxis)
_____
>[!example]+ RELATED TERMS to tax-
>
_____
>[!tip]+ DERIVATIONS of tax-
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
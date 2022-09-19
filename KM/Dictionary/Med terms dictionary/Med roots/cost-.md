---
tags: [" #medroot"]
aliases: []
roots: [cost-]
forms: [combining]
alphabet:: C
definition: [rib]
---
>[!Note] DEFINITION of cost-
>rib
_____
>[!info]+ ETYMOLOGY of cost-
>#latin costa
_____
>[!example]+ RELATED TERMS to cost-
>
_____
>[!tip]+ DERIVATIONS of cost-
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
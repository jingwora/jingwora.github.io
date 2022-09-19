---
tags: [" #medroot"]
aliases: []
roots: [tuss-]
forms: [combining]
alphabet:: T
definition: [cough]
---
>[!Note] DEFINITION of tuss-
>cough
_____
>[!info]+ ETYMOLOGY of tuss-
>#latin tussis
_____
>[!example]+ RELATED TERMS to tuss-
>
_____
>[!tip]+ DERIVATIONS of tuss-
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
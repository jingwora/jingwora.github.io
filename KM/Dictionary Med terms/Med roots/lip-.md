---
tags: [" #medroot"]
aliases: []
roots: [lip-]
forms: [combining]
alphabet:: L
definition: [fat]
---
>[!Note] DEFINITION of lip-
>fat
_____
>[!info]+ ETYMOLOGY of lip-
>#greek lipos
_____
>[!example]+ RELATED TERMS to lip-
>
>| [[lip-]]  | fat |   -   |        -         |
|:----------:|:---:|:-----:|:----------------:|
|  [[adip-]]  | fat |   -   |        -         |
| [[stear-]] | fat | sebum | sebaceous glands |
_____
>[!tip]+ DERIVATIONS of lip-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
---
tags: [" #medroot"]
aliases: []
roots: [adip-]
forms: [combining]
alphabet:: A
definition: [fat]
---
>[!Note] DEFINITION of adip-
>fat
_____
>[!info]+ ETYMOLOGY of adip-
>#greek adeps, adipis
_____
>[!example]+ RELATED TERMS to adip-
>
>| [[adip-]]  | fat |   -   |        -         |
|:----------:|:---:|:-----:|:----------------:|
|  [[lip-]]  | fat |   -   |        -         |
| [[stear-]] | fat | sebum | sebaceous glands |
_____
>[!tip]+ DERIVATIONS of adip-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
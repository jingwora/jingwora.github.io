---
tags: [" #medroot"]
aliases: [steat-]
roots: [stear-]
forms: [combining]
alphabet:: S
definition: [fat, sebum, sebaceous glands]
---
>[!Note] DEFINITION of stear-
>fat, sebum, sebaceous glands
_____
>[!info]+ ETYMOLOGY of stear-
>#greek stear, steatos
_____
>[!example]+ RELATED TERMS to stear-
>
| [[stear-]]  | fat |   sebum   |        sebaceous glands         |
|:----------:|:---:|:-----:|:----------------:|
|  [[adip-]]  | fat |   -   |        -         |
| [[lip-]] | fat | - | -  |
_____
>[!tip]+ DERIVATIONS of stear-
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
---
tags: [" #medroot"]
aliases: []
roots: [pector-]
forms: [combining]
alphabet:: P
definition: [breast, chest]
---
>[!Note] DEFINITION of pector-
>breast, chest
_____
>[!info]+ ETYMOLOGY of pector-
>#latin pectus, pectoris
_____
>[!example]+ RELATED TERMS to pector-
>
>| [[pector-]] | breast | chest |     -      |
|:-----------:|:------:|:-----:|:----------:|
|  [[mamm-]]  |  YES   |   -   |     -      |
|  [[mast-]]  |  YES   |   -   |     -      |
| [[stern-]]  |  YES   |  YES  | breastbone |
| [[steth-]]  |  YES   |  YES  | -           |
_____
>[!tip]+ DERIVATIONS of pector-
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
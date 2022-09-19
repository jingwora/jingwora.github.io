---
tags: [" #medroot"]
aliases: []
roots: [stern-]
forms: [combining]
alphabet:: S
definition: [chest, breast, breastbone]
---
>[!Note] DEFINITION of stern-
>chest, breast, breastbone
_____
>[!info]+ ETYMOLOGY of stern-
>#greek sternon
_____
>[!example]+ RELATED TERMS to stern-
>
>| [[stern-]]  | chest | breast | breastbone |
|:-----------:|:-----:|:------:|:----------:|
|  [[mamm-]]  |   -   |  YES   |     -      |
|  [[mast-]]  |   -   |  YES   |     -      |
| [[pector-]] |  YES  |  YES   |     -      |
| [[steth-]]  |  YES  |  YES   | -           |
_____
>[!tip]+ DERIVATIONS of stern-
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
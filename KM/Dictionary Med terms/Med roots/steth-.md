---
tags: [" #medroot"]
aliases: []
roots: [steth-]
forms: [combining]
alphabet:: S
definition: [chest, breast]
---
>[!Note] DEFINITION of steth-
>chest, breast
_____
>[!info]+ ETYMOLOGY of steth-
>#greek stethos
_____
>[!example]+ RELATED TERMS to steth-
>
>| [[steth-]]  | chest | breast | - |
|:-----------:|:-----:|:------:|:----------:|
|  [[mamm-]]  |   -   |  YES   |     -      |
|  [[mast-]]  |   -   |  YES   |     -      |
| [[pector-]] |  YES  |  YES   |     -      |
| [[stern-]]  |  YES  |  YES   | breastbone           |
_____
>[!tip]+ DERIVATIONS of steth-
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
---
tags: [" #medroot"]
aliases: []
roots: [mast-]
forms: [combining]
alphabet:: M
definition: [breast]
---
>[!Note] DEFINITION of mast-
>breast
_____
>[!info]+ ETYMOLOGY of mast-
>greek mastos
_____
>[!example]+ RELATED TERMS to mast-
>
>|  [[mast-]]  | breast |   -   | -          |
|:-----------:|:------:|:-----:| ---------- |
|  [[mamm-]]  |  YES   |   -   | -          |
| [[pector-]] |  YES   | chest | -          |
| [[stern-]]  |  YES   | chest | breastbone |
| [[steth-]]  |  YES   | chest | -           |
_____
>[!tip]+ DERIVATIONS of mast-
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
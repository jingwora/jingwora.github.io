---
tags: [" #medroot"]
aliases: []
roots: [mamm-]
forms: [combining]
alphabet:: M
definition: [breast]
---
>[!Note] DEFINITION of mamm-
>breast
_____
>[!info]+ ETYMOLOGY of mamm-
>#latin mamma
_____
>[!example]+ RELATED TERMS to mamm-
>
>|  [[mamm-]]  | breast |   -   | -          |
|:-----------:|:------:|:-----:| ---------- |
|  [[mast-]]  |  YES   |   -   | -          |
| [[pector-]] |  YES   | chest | -          |
| [[stern-]]  |  YES   | chest | breastbone |
| [[steth-]]  |  YES   | chest | -           |
_____
>[!tip]+ DERIVATIONS of mamm-
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
---
tags: [" #medroot"]
aliases: []
roots: [typhl-]
forms: [combining]
alphabet:: T
definition: [cecum]
---
>[!Note] DEFINITION of typhl-
>cecum
_____
>[!info]+ ETYMOLOGY of typhl-
>#greek typhlos (blind)
_____
>[!example]+ RELATED TERMS to typhl-
>
>|  [[typhl-]]  | cecum |
|:----------:|:-----:|
| [[cec-]] |  YES  |
_____
>[!tip]+ DERIVATIONS of typhl-
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
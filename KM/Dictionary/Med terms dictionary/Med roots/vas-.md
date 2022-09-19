---
tags: [" #medroot"]
aliases: []
roots: [vas-]
forms: [combining]
alphabet:: V
definition: [vessel, vas deferens]
---
>[!Note] DEFINITION of vas-
>1. (blood) vessel
>2. vas deferens
_____
>[!info]+ ETYMOLOGY of vas-
>#latin vas
_____
>[!example]+ RELATED TERMS to vas-
>
>| [[vas-]]  | vessel | vas deferens |  -  |
|:---------:|:------:|:------------:|:---:|
| [[angi-]] |  YES   |      -       | duct    |
_____
>[!tip]+ DERIVATIONS of vas-
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
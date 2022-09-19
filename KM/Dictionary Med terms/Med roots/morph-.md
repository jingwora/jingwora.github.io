---
tags: [" #medroot"]
aliases: []
roots: [morph-]
forms: [combining]
alphabet:: M
definition: [form, shape]
---
>[!Note] DEFINITION of morph-
>form, shape
_____
>[!info]+ ETYMOLOGY of morph-
>#greek morphe
_____
>[!example]+ RELATED TERMS to morph-
>
>| [[morph-]] | form | shape |  -  |
|:----------:|:----:|:-----:|:---:|
| [[-form]]  |  -   |  YES  |  -  |
| [[plas-]]  | YES  |   -   | develop    |
_____
>[!tip]+ DERIVATIONS of morph-
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
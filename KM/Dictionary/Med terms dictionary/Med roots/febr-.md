---
tags: [" #medroot"]
aliases: [febris]
roots: [febr-, febris]
forms: [combining]
alphabet:: F
definition: [fever]
---
>[!Note] DEFINITION of febr-
>fever
_____
>[!info]+ ETYMOLOGY of febr-
>#latin febris
_____
>[!example]+ RELATED TERMS to febr-
>
>| [[febr-]]  | fever |    -    |
|:----------:|:-----:|:-------:|
|  [[pyr-]]  |  YES  | burning |
| [[pyret-]] |  YES  | -        |
_____
>[!tip]+ DERIVATIONS of febr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
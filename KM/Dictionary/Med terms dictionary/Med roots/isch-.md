---
tags: [" #medroot"]
aliases: []
roots: [isch-]
forms: [combining]
alphabet:: I
definition: [suppress, check]
---
>[!Note] DEFINITION of isch-
>suppress, check
_____
>[!info]+ ETYMOLOGY of isch-
>#greek ischein
_____
>[!example]+ RELATED TERMS to isch-
>
>| [[isch-]]  | suppress | check |
|:----------:|:--------:|:-----:|
| [[-sche-]] |   YES    |  YES  | 
_____
>[!tip]+ DERIVATIONS of isch-
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
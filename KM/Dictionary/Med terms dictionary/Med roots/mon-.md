---
tags: [" #medroot"]
aliases: []
roots: [mon-]
forms: [combining]
alphabet:: M
definition: [single]
---
>[!Note] DEFINITION of mon-
>single
_____
>[!info]+ ETYMOLOGY of mon-
>#greek monos
_____
>[!example]+ RELATED TERMS to mon-
>
>| [[mon-]]  | single |  -  |
|:---------:|:------:|:---:|
| [[mono-]] |  YES   | one    |
_____
>[!tip]+ DERIVATIONS of mon-
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
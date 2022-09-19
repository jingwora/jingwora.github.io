---
tags: [" #medroot"]
aliases: []
roots: [vacc-]
forms: [combining]
alphabet:: V
definition: [cow]
---
>[!Note] DEFINITION of vacc-
>cow
_____
>[!info]+ ETYMOLOGY of vacc-
>#latin vacca
_____
>[!example]+ RELATED TERMS to vacc-
>
>| [[vacc-]] | cow |  -  |
|:---------:|:---:|:---:|
| [[bov-]]  | YES | bull, ox    |
_____
>[!tip]+ DERIVATIONS of vacc-
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
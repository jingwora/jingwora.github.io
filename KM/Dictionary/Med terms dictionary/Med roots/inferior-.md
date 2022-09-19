---
tags: [" #medroot"]
aliases: []
roots: [inferior-]
forms: [combining]
alphabet:: I
definition: [below]
---
>[!Note] DEFINITION of inferior-
>below
_____
>[!info]+ ETYMOLOGY of inferior-
>#latin inferior
_____
>[!example]+ RELATED TERMS to inferior-
>
>| [[inferior-]] | below |  -  |
|:-------------:|:-----:|:---:|
|  [[infra-]]   |  YES  | beneath    |
_____
>[!tip]+ DERIVATIONS of inferior-
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
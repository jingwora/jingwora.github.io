---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [infra-]
alphabet:: I
definition: [beneath, below]
---
>[!Note] DEFINITION of infra-
>beneath, below
_____
>[!info]+ ETYMOLOGY of infra-
>#latin
_____
>[!example]+ RELATED TERMS to infra-
>
>| [[infra-]] | below |  beneath |
|:-------------:|:-----:|:---:|
|  [[inferior-]]   |  YES  | -    |
_____
>[!tip]+ DERIVATIONS of infra-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
---
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
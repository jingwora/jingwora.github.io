---
tags: [" #medroot"]
aliases: []
roots: [sial-]
forms: [combining]
alphabet:: S
definition: [saliva, salivary duct]
---
>[!Note] DEFINITION of sial-
>saliva, salivary duct
_____
>[!info]+ ETYMOLOGY of sial-
>#greek sialon
_____
>[!example]+ RELATED TERMS to sial-
>
>| [[sial-]]  | saliva | salivary duct |
|:----------:|:------:|:-------------:|
| [[ptyal-]] |  YES   | -              |
_____
>[!tip]+ DERIVATIONS of sial-
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
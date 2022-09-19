---
tags: [" #medroot"]
aliases: []
roots: [aer-]
forms: [combining]
alphabet:: A
definition: [air, gas]
---
>[!Note] DEFINITION of aer-
>air, gas
_____
>[!info]+ ETYMOLOGY of aer-
>#greek aer
_____
>[!example]+ RELATED TERMS to aer-
>
>| [[aer-]]     | air | gas |
| ------------ | --- | --- |
| [[phys-]]    | YES | YES |
| [[pneumat-]] | YES | YES    |
_____
>[!tip]+ DERIVATIONS of aer-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
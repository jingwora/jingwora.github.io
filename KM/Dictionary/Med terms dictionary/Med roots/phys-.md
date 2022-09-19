---
tags: [" #medroot"]
aliases: []
roots: [phys-]
forms: [combining]
alphabet:: P
definition: [air, gas]
---
>[!Note] DEFINITION of phys-
>air, gas
_____
>[!info]+ ETYMOLOGY of phys-
>#greek physa
_____
>[!example]+ RELATED TERMS to phys-
>
>|  [[phys-]]   | air | gas |
|:------------:|:---:|:---:|
|   [[aer-]]   | YES | YES |
| [[pneumat-]] | YES | YES    |
_____
>[!tip]+ DERIVATIONS of phys-
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
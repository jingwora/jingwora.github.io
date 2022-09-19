---
tags: [" #medroot"]
aliases: [pneum(at)-]
roots: [pneumat-, pneum(at)-]
forms: [combining]
alphabet:: P
definition: [air, gas]
---
>[!Note] DEFINITION of pneumat-
>air, gas
>*see also: [[pne-]]*
_____
>[!info]+ ETYMOLOGY of pneumat-
>#greek pneuma, pneumatos
_____
>[!example]+ RELATED TERMS to pneumat-
>
>|  [[phys-]]   | air | gas |
|:------------:|:---:|:---:|
|   [[aer-]]   | YES | YES |
| [[pneumat-]] | YES | YES    |
_____
>[!tip]+ DERIVATIONS of pneumat-
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
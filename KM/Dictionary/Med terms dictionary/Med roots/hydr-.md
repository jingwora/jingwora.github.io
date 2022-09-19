---
tags: [" #medroot #greek "]
aliases:: []
forms:: [combining]
roots:: [hydr-]
alphabet:: H
definition: [water, fluid]
---
>[!Note] Definition of hydr-
>water, fluid
>*not to be confused with: [[hidr-]] (sweat)*
_____
>[!info]+ Etymology of hydr-
>#greek hydor, hydatos
_____
>[!example]+ Related terms to hydr-
>
>| [[hydr-]] | water | fluid |   -   |
|:---------:|:-----:|:-----:|:-----:|
| [[sud-]]  |   -   |  YES  | sweat |
_____
>[!tip]+ Derivations
>```dataview
TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
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
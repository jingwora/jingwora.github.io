---
tags: [" #medroot"]
aliases: [spir(at)-]
roots: [spirat-, spir(at)-]
forms: [combining]
alphabet:: S
definition: [breathe]
---
>[!Note] DEFINITION of spirat-
>breathe
_____
>[!info]+ ETYMOLOGY of spirat-
>#latin spirare, spiratus
_____
>[!example]+ RELATED TERMS to spirat-
>
>|  [[pne-]]   | breathe |
|:-----------:|:-------:|
| [[spirat-]] | YES        |
_____
>[!tip]+ DERIVATIONS of spirat-
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
---
tags: [" #medroot"]
aliases: []
roots: [pne-]
forms: [combining]
alphabet:: P
definition: [breathe]
---
>[!Note] DEFINITION of pne-
>breathe
>*see also: [[pneumat-]] (air), [[pneumon-]] (lung)*
_____
>[!info]+ ETYMOLOGY of pne-
>#greek pnein
_____
>[!example]+ RELATED TERMS to pne-
>
>|  [[pne-]]   | breathe |
|:-----------:|:-------:|
| [[spirat-]] | YES        |
_____
>[!tip]+ DERIVATIONS of pne-
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
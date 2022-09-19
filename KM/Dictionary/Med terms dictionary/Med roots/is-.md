---
tags: [" #medroot"]
aliases: []
roots: [is-]
forms: [combining]
alphabet:: I
definition: [equal, same, similar, alike]
---
>[!Note] DEFINITION of is-
>equal, same, similar, alike
_____
>[!info]+ ETYMOLOGY of is-
>#greek isos
_____
>[!example]+ RELATED TERMS to is-
>
>|  [[is-]]  | equal | same | similar | alike |  -  |
|:---------:|:-----:|:----:|:-------:|:-----:|:---:|
| [[homo-]] |   -   | YES  |    -    |   -   | likeness    |
_____
>[!tip]+ DERIVATIONS of is-
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
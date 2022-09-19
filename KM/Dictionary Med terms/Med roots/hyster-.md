---
tags: [" #medroot"]
aliases: []
roots: [hyster-]
forms: [combining]
alphabet:: H
definition: [uterus]
---
>[!Note] DEFINITION of hyster-
>uterus
_____
>[!info]+ ETYMOLOGY of hyster-
>#greek hystera
_____
>[!example]+ RELATED TERMS to hyster-
>
>| [[hyster-]] | uterus |  -   |   -   |
|:-----------:| ------ |:----:|:-----:|
|  [[uter-]]  | YES    | womb | belly |
| [[-metra]]  | YES    |  -   | -      |
_____
>[!tip]+ DERIVATIONS of hyster-
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
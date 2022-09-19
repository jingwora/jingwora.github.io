---
tags: [" #medroot"]
aliases: []
roots: [uter-]
forms: [combining]
alphabet:: U
definition: [womb, belly, uterus]
---
>[!Note] DEFINITION of uter-
>womb, belly, uterus
_____
>[!info]+ ETYMOLOGY of uter-
>#latin uterus
_____
>[!example]+ RELATED TERMS to uter-
>
>|  [[uter-]]   | womb | belly | uterus |    -    |
|:------------:|:----:|:-----:|:------:|:-------:|
| [[abdomin-]] |  -   |  YES  |   -    | abdomen |
| [[hyster-]]  |  -   |   -   |  YES   |    -    |
|  [[-metra]]  |  -   |   -   |  YES   |    -    |
|  [[ventr-]]  |  -   |  YES  |   -    | abdomen, abdominal cavity        |
_____
>[!tip]+ DERIVATIONS of uter-
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
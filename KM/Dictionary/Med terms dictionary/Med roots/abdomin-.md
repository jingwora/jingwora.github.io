---
tags: [" #medroot"]
aliases: []
roots: [abdomin-]
forms: [combining]
alphabet:: A
definition: [belly, abdomen]
---
>[!Note] DEFINITION of abdomin-
>belly, abdomen
_____
>[!info]+ ETYMOLOGY of abdomin-
>#greek abdomen, abdominis
_____
>[!example]+ RELATED TERMS to abdomin-
>
>| [[abdomin-]] | belly | abdomen |        -         |   -    |
|:------------:|:-----:|:-------:|:----------------:|:------:|
|   [[cel-]]   |   -   |   YES   |        -         |   -    |
|  [[lapar-]]  |   -   |   YES   |  abdominal wall  |   -    |
|  [[uter-]]   |  YES  |    -    |       womb       | uterus |
|  [[ventr-]]  |  YES  |   YES   | abdominal cavity | -       |
_____
>[!tip]+ DERIVATIONS of abdomin-
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
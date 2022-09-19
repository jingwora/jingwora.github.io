---
tags: [" #medroot"]
aliases: [di(a)-]
forms: [prefix]
roots: [dia-, di(a)-]
alphabet:: D
definition: [through, across, apart]
---
>[!Note] DEFINITION of dia-
>through, across, apart
_____
>[!info]+ ETYMOLOGY of dia-
>#greek
>- di- before {vowel}
_____
>[!example]+ RELATED TERMS to dia-
>
>|  [[dia-]]  | through | across | apart |        -         |
|:----------:|:-------:|:------:|:-----:|:----------------:|
|  [[dis-]]  |    -    |   -    |  YES  |       away       |
|  [[per-]]  |   YES   |   -    |   -   | very, thoroughly |
|  [[se-]]   |    -    |   -    |  YES  |    away from     |
| [[trans-]] |    through    |  YES   |   -   | -                 |
_____
>[!tip]+ DERIVATIONS of dia-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
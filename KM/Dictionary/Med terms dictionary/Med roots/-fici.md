---
tags: [" #medroot"]
aliases: []
roots: [-fici]
forms: [combining]
alphabet:: F
definition: [face, appearance, surface]
---
>[!Note] DEFINITION of -fici
>face, appearance, surface
_____
>[!info]+ ETYMOLOGY of -fici
>#latin facies
_____
>[!example]+ RELATED TERMS to -fici
>
>|  [[-fici]]  | face | appearance | surface |   -    |
|:-----------:|:----:|:----------:|:-------:|:------:|
|  [[faci-]]  | YES  |    YES     |   YES   |   -    |
| [[physi-]]  |  -   |    YES     |    -    | nature |
| [[prosop-]] | YES  |     -      |    -    |   -    |
_____
>[!tip]+ DERIVATIONS of -fici
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
---
tags: [" #medroot"]
aliases: [facies]
roots: [faci-, facies]
forms: [combining]
alphabet:: F
definition: [face, appearance, surface]
---
>[!Note] DEFINITION of faci-
>face, appearance, surface
_____
>[!info]+ ETYMOLOGY of faci-
>#latin facies
_____
>[!example]+ RELATED TERMS to faci-
>
>|  [[faci-]]  | face | appearance | surface |   -    |
|:-----------:|:----:|:----------:|:-------:|:------:|
|  [[-fici]]  | YES  |    YES     |   YES   |   -    |
| [[physi-]]  |  -   |    YES     |    -    | nature |
| [[prosop-]] | YES  |     -      |    -    | -       |
_____
>[!tip]+ DERIVATIONS of faci-
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
>

[[Med roots dictionary]]
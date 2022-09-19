---
tags: [" #medroot"]
aliases: [co-, col-, com-, cor-]
forms: [prefix]
roots: [con-, co-, col-, com-, cor-]
alphabet:: C
definition: [together, with, thoroughly, very]
---
>[!Note] DEFINITION of con-
>1. together, with
>2. thoroughly, very
_____
>[!info]+ ETYMOLOGY of con-
>#latin
>- co- before "h"
>- col- before "l"
>- com- before "e, m, p"
>- cor- before "r"
_____
>[!example]+ RELATED TERMS to con-
>
>|   [[con-]]    | together | with | thoroughly | very |    -    |   -    |
|:-------------:|:--------:|:----:|:----------:|:----:|:-------:|:------:|
| [[in(very)-]] |    -     |  -   |    YES     | YES  |    -    |   -    |
|    [[ob-]]    |    -     |  -   |    YES     | YES  | against | toward |
|   [[per-]]    |    -     |  -   |    YES     | YES  | through |   -    |
|   [[syn-]]    |   YES    | YES  |     -      |  -   | joined  | -       |
_____
>[!tip]+ DERIVATIONS of con-
>```dataview
>TABLE definition AS Definition 
>FROM -#medroot
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
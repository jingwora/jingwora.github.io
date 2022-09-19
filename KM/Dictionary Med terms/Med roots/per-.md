---
tags: [" #medroot"]
aliases: [pel-]
roots: [per-, pel-]
forms: [prefix]
alphabet:: P 
definition: [through, very, thoroughly]
---
>[!Note] DEFINITION of per-
>1. through
>2. very, thoroughly
_____
>[!info]+ ETYMOLOGY of per-
>#latin
>- pel- before "l"
_____
>[!example]+ RELATED TERMS to per-
>
>|   [[per-]]    | through | very | thoroughly |    -     |   -   |
|:-------------:|:-------:|:----:|:----------:|:--------:|:-----:|
|   [[con-]]    |    -    | YES  |    YES     | together | with  |
|   [[dia-]]    |   YES   |  -   |     -      |  across  | apart |
|  [[trans-]]   |   YES   |  -   |     -      |  across  |   -   |
| [[in(very)-]] |    -    | YES  |     -      | thorough |   -   |
|    [[ob-]]    |    -    | YES  |    YES     | against  | toward      |
_____
>[!tip]+ DERIVATIONS of per-
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
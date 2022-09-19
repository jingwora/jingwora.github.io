---
tags: [" #medroot"]
aliases: [oc-, op-]
roots: [ob-]
forms: [prefix]
alphabet:: O
definition: [against, toward, very, thoroughly]
---
>[!Note] DEFINITION of ob-
>against, toward, very, thoroughly
_____
>[!info]+ ETYMOLOGY of ob-
>#latin
>- oc- before "c"
>- op- before "p"
_____
>[!example]+ RELATED TERMS to ob-
>
>|    [[ob-]]    | against | toward | very | thoroughly |           -            |     -     |
|:-------------:|:-------:|:------:|:----:|:----------:|:----------------------:|:---------:|
|    [[ad-]]    |    -    |  YES   |  -   |     -      |           to           |     -     |
|    [[-ad]]    |    -    |  YES   |  -   |     -      |           -            |     -     |
|   [[ana-]]    |   YES   |   -    |  -   |     -      |           up           |   back    |
|   [[anti-]]   |   YES   |   -    |  -   |     -      | opposed to, preventing | relieving |
|   [[con-]]    |    -    |   -    | YES  |    YES     |     together, with     |     -     |
|  [[contra-]]  |   YES   |   -    |  -   |     -      |        opposite        |     -     |
|   [[per-]]    |    -    |   -    | YES  |    YES     |        through         |     -     |
| [[in(very)-]] |    -    |   -    | YES  |    YES     |           -            | -          |
_____
>[!tip]+ DERIVATIONS of ob-
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
---
tags: [" #medroot"]
aliases: [em-]
forms: [prefix]
roots: [en-, em]
alphabet:: E
definition: [in, into, within]
---
>[!Note] DEFINITION of en-
>movement in, into, within 
_____
>[!info]+ ETYMOLOGY of en-
>#greek
>- em- before "b, m, p"
_____
>[!example]+ RELATED TERMS to en-
>
>|   [[en-]]   | movement in | into | within |       -       |
|:-----------:|:-----------:|:----:|:------:|:-------------:|
|  [[endo-]]  |      -      |  -   |  YES   |       -       |
|  [[eso-]]   |      -      |  -   |  YES   | inner, inward |
| [[in(in)-]] |      -      | YES  |   in   |       -       |
| [[intra-]]  |      -      |  -   |  YES   | -              |
_____
>[!tip]+ DERIVATIONS of en-
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
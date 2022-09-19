---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [hyper-]
alphabet:: H
definition: [over, above, excessive, beyond normal]
---
>[!Note] DEFINITION of hyper-
>over, above, excessive, beyond normal
_____
>[!info]+ ETYMOLOGY of hyper-
>#greek
_____
>[!example]+ RELATED TERMS to hyper-
>
>|  [[hyper-]]   | over | above | excessive | beyond normal |  -   |
|:-------------:|:----:|:-----:|:---------:|:-------------:|:----:|
|   [[epi-]]    | YES  |  YES  |     -     |       -       | upon |
|   [[poly-]]   |  -   |   -   |    YES    |       -       | many |
|  [[super-]]   | YES  |  YES  |  excess   |       -       |  -   |
| [[superior-]] |  -   |  YES  |     -     |       -       | -     |
_____
>[!tip]+ DERIVATIONS of hyper-
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
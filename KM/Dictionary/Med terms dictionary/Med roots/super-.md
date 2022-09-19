---
tags: [" #medroot"]
aliases: [supra-]
roots: [super-, supra-]
forms: [prefix]
alphabet:: S
definition: [over, above, excess]
---
>[!Note] DEFINITION of super-
>over, above, excess
_____
>[!info]+ ETYMOLOGY of super-
>#latin
>- supra- (often)
_____
>[!example]+ RELATED TERMS to super-
>
>|  [[super-]]   | over | above | excess |            -             |
|:-------------:|:----:|:-----:|:------:|:------------------------:|
|   [[epi-]]    | YES  |  YES  |   -    |           upon           |
|  [[hyper-]]   | YES  |  YES  |   -    | excessive, beyond normal |
| [[superior-]] |  -   |  YES  |   -    |            -             |
|  [[ultra-]]   |  -   |   -   |  YES   | beyond                         |
_____
>[!tip]+ DERIVATIONS of super-
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
---
tags: [" #medroot"]
aliases: []
roots: [superior-]
forms: [combining]
alphabet:: S
definition: [above]
---
>[!Note] DEFINITION of superior-
>above
_____
>[!info]+ ETYMOLOGY of superior-
>#latin superior
_____
>[!example]+ RELATED TERMS to superior-
>
>| [[superior-]] | above |  -   |            -             |
|:-------------:|:-----:|:----:|:------------------------:|
|   [[epi-]]    |  YES  | upon |           over           |
|  [[hyper-]]   |  YES  | over | excessive, beyond normal |
|  [[super-]]   |  YES  | over | excess                         |
_____
>[!tip]+ DERIVATIONS of superior-
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
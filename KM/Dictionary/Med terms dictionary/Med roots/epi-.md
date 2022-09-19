---
tags: [" #medroot"]
aliases: [ep-]
forms: [prefix]
roots: [epi-, ep-]
alphabet:: E
definition: [upon, over, above]
---
>[!Note] DEFINITION of epi-
>Definition
_____
>[!info]+ ETYMOLOGY of epi-
>#greek
_____
>[!example]+ RELATED TERMS to epi-
>
>|   [[epi-]]    | upon | over | above |     -     |       -       |
|:-------------:|:----:|:----:|:-----:|:---------:|:-------------:|
|  [[hyper-]]   |  -   | YES  |  YES  | excessive | beyond normal |
|  [[super-]]   |  -   | YES  |  YES  |  excess   |       -       |
| [[superior-]] |  -   |  -   |  YES  |     -     | -              |
_____
>[!tip]+ DERIVATIONS of epi-
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
---
tags: [" #medroot"]
aliases: [-cystis, cysti-]
roots: [cyst-, -cystis, cysti-]
forms: [combining]
alphabet:: C
definition: [bladder, cyst]
---
>[!Note] DEFINITION of cyst-
>bladder, cyst
_____
>[!info]+ ETYMOLOGY of cyst-
>#greek kystis
_____
>[!example]+ RELATED TERMS to cyst-
>
|  [[cyst-]]  | bladder | cyst |    -    |  -  |
|:----------:|:---:|:----:|:-------:|:---:|
|  [[asc-]]  |  YES  |  -   | bag | sac |
| [[vesic-]] |  YES  |  -   | - |  -  |
_____
>[!tip]+ DERIVATIONS of cyst-
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
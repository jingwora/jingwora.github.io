---
tags: [" #medroot"]
aliases: [spermat-]
roots: [sperm-, spermat-]
forms: [combining]
alphabet:: S
definition: [seed, sperm, semen]
---
>[!Note] DEFINITION of sperm-
>seed, sperm, semen
_____
>[!info]+ ETYMOLOGY of sperm-
>#greek sperma, spermatos
_____
>[!example]+ RELATED TERMS to sperm-
>
>| [[sperm-]] | seed | sperm | semen |
|:----------:|:----:|:-----:|:-----:|
|  [[sem-]]  |  -   |  YES  | -      |
_____
>[!tip]+ DERIVATIONS of sperm-
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
---
tags: [" #medroot"]
aliases: [semin-]
roots: [sem-, semin-]
forms: [combining]
alphabet:: S
definition: [semen]
---
>[!Note] DEFINITION of sem-
>semen
_____
>[!info]+ ETYMOLOGY of sem-
>#latin semen, seminis (seed)
_____
>[!example]+ RELATED TERMS to sem-
>
>|  [[sem-]]  | semen |   -   |  -  |
|:----------:|:-----:|:-----:|:---:|
| [[sperm-]] |  YES  | sperm | seed    |
_____
>[!tip]+ DERIVATIONS of sem-
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
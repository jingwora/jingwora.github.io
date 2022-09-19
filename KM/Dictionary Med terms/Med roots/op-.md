---
tags: [" #medroot"]
aliases: [ops-]
roots: [op-, ops-]
forms: [combining]
alphabet:: O
definition: [vision]
---
>[!Note] DEFINITION of op-
>vision
_____
>[!info]+ ETYMOLOGY of op-
>#greek ops
_____
>[!example]+ RELATED TERMS to op-
>
>| [[op-]]  | vision |  -  |
|:--------:|:------:|:---:|
| [[opt-]] |  YES   | eye    |
_____
>[!tip]+ DERIVATIONS of op-
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
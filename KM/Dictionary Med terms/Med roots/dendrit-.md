---
tags: [" #medroot"]
aliases: []
roots: [dendrit-]
forms: [combining]
alphabet:: D
definition: [dendrite]
---
>[!Note] DEFINITION of dendrit-
>dendrite
_____
>[!info]+ ETYMOLOGY of dendrit-
>#greek dendrites (pertaining to a tree)
_____
>[!example]+ RELATED TERMS to dendrit-
>
>|  [[dendrit-]]  | dendrite | - |
|:------------:|:--------:|:-------:|
| [[dendr-]] |   YES    |   dendron    |
_____
>[!tip]+ DERIVATIONS of dendrit-
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
---
tags: [" #medroot"]
aliases: []
roots: [dendr-]
forms: [combining]
alphabet:: D
definition: [dendrite, dendron]
---
>[!Note] DEFINITION of dendr-
>dendrite, dendron
_____
>[!info]+ ETYMOLOGY of dendr-
>#greek dendron (tree)
_____
>[!example]+ RELATED TERMS to dendr-
>
>|  [[dendr-]]  | dendrite | dendron |
|:------------:|:--------:|:-------:|
| [[dendrit-]] |   YES    |   -    |
_____
>[!tip]+ DERIVATIONS of dendr-
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
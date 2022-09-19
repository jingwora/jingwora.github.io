---
tags: [" #medroot"]
aliases: [gene-]
roots: [gen-, gene-]
forms: [combining]
alphabet:: G
definition: [come into being, produce]
---
>[!Note] DEFINITION of gen-
>come into being, produce (see also: [[genit-]])
_____
>[!info]+ ETYMOLOGY of gen-
>#greek gignesthai
_____
>[!example]+ RELATED TERMS to gen-
>
>| [[gen-]]  | come into being | produce |  -  |
|:---------:|:---------------:|:-------:|:---:|
| [[poie-]] |        -        |   YES   | make    |
_____
>[!tip]+ DERIVATIONS of gen-
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
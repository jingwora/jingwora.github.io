---
tags: [" #medroot"]
aliases: []
roots: [desm-]
forms: [combining]
alphabet:: D
definition: [ligament, connective tissue]
---
>[!Note] DEFINITION of desm-
>ligament, connective tissue
_____
>[!info]+ ETYMOLOGY of desm-
>#greek desmos (binding)
_____
>[!example]+ RELATED TERMS to desm-
>
>| [[desm-]] | ligament | connective tissue |    -     |      -      |
|:---------:|:--------:|:-----------------:|:--------:|:-----------:|
| [[-ium]]  |    -     |        YES        | membrane | body region |
_____
>[!tip]+ DERIVATIONS of desm-
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
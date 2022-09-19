---
tags: [" #medroot"]
aliases: [-auxis, -auxe]
roots: [aux-, -auxe]
forms: [combining]
alphabet:: A
definition: [grow, increase]
---
>[!Note] DEFINITION of aux-
>grow, increase
_____
>[!info]+ ETYMOLOGY of aux-
>#greek auxein
_____
>[!example]+ RELATED TERMS to aux-
>
>|  [[aux-]]  | grow | increase |
|:----------:|:----:|:--------:|
| [[cresc-]] | YES  |    -     |
_____
>[!tip]+ DERIVATIONS of aux-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
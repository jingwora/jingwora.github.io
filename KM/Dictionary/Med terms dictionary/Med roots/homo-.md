---
tags: [" #medroot"]
aliases: [homeo-]
forms: [prefix]
roots: [homo-, homeo-]
alphabet:: H
definition: [same, likeness]
---
>[!Note] DEFINITION of homo-
>same, likeness
_____
>[!info]+ ETYMOLOGY of homo-
>#greek
_____
>[!example]+ RELATED TERMS to homo-
>
>| [[homo-]] | same | likeness |  -  |
|:---------:|:----:|:--------:|:---:|
|  [[is-]]  | YES  |    -     | equal, similar, alike    |
_____
>[!tip]+ DERIVATIONS of homo-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
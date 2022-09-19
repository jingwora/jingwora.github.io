---
tags: [" #medroot"]
aliases: []
roots: [mes-]
forms: [combining]
alphabet:: M
definition: [middle, secondary, partial, mesentery]
---
>[!Note] DEFINITION of mes-
>middle, secondary, partial, mesentery
_____
>[!info]+ ETYMOLOGY of mes-
>#greek mesos
_____
>[!example]+ RELATED TERMS to mes-
>
>| [[mes-]]  | middle | secondary | partial | mesentary |  -  |
|:---------:|:------:|:---------:|:-------:|:---------:|:---:|
| [[hemi-]] |   -    |     -     |   YES   |     -     | half, one side of the body    |
_____
>[!tip]+ DERIVATIONS of mes-
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
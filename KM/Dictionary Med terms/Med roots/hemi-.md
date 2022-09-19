---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [hemi-]
alphabet:: H
definition: [half, partial, (often) one side of the body]
---
>[!Note] DEFINITION of hemi-
>1. half, partial
>2. one side of the body
_____
>[!info]+ ETYMOLOGY of hemi-
>#greek
_____
>[!example]+ RELATED TERMS to hemi-
>
>| [[hemi-]] | half | partial | one side of the body |               -               |
|:---------:|:----:|:-------:|:--------------------:|:-----------------------------:|
| [[mes-]]  |  -   |   YES   |          -           | secondary, partial, mesentary |
| [[semi-]] | YES  |    -    |          -           | -                              |
_____
>[!tip]+ DERIVATIONS of hemi-
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
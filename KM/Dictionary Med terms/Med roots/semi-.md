---
tags: [" #medroot"]
aliases: []
roots: [semi-]
forms: [prefix]
alphabet:: S
definition: [half]
---
>[!Note] DEFINITION of semi-
>half
_____
>[!info]+ ETYMOLOGY of semi-
>#latin
_____
>[!example]+ RELATED TERMS to semi-
>
>| [[semi-]] | half |    -    |  -  |
|:---------:|:----:|:-------:|:---:|
| [[hemi-]] | YES  | partial | one side of the body    |
_____
>[!tip]+ DERIVATIONS of semi-
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
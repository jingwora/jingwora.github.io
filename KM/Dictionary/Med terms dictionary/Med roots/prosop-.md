---
tags: [" #medroot"]
aliases: []
roots: [prosop-]
forms: [combining]
alphabet:: P
definition: [face]
---
>[!Note] DEFINITION of prosop-
>face
_____
>[!info]+ ETYMOLOGY of prosop-
>#greek prosopon
_____
>[!example]+ RELATED TERMS to prosop-
>
>| [[prosop-]] | face |     -      |    -    |
|:-----------:|:----:|:----------:|:-------:|
|  [[faci-]]  | YES  | appearance | surface |
|  [[-fici]]  | YES  | appearance | surface        |
_____
>[!tip]+ DERIVATIONS of prosop-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
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
---
tags: [" #medroot"]
aliases: []
roots: [oste-]
forms: [combining]
alphabet:: O
definition: [bone]
---
>[!Note] DEFINITION of oste-
>bone
_____
>[!info]+ ETYMOLOGY of oste-
>#greek osteon
_____
>[!example]+ RELATED TERMS to oste-
>
>| [[oste-]]  | bone |
|:---------:|:----:|
| [[oss-]] | YES     |
_____
>[!tip]+ DERIVATIONS of oste-
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
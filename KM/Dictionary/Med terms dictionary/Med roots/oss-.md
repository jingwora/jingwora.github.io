---
tags: [" #medroot"]
aliases: []
roots: [oss-]
forms: [combining]
alphabet:: O
definition: [bone]
---
>[!Note] DEFINITION of oss-
>bone
_____
>[!info]+ ETYMOLOGY of oss-
>#latin bone
_____
>[!example]+ RELATED TERMS to oss-
>
>| [[oss-]]  | bone |
|:---------:|:----:|
| [[oste-]] | YES     |
_____
>[!tip]+ DERIVATIONS of oss-
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
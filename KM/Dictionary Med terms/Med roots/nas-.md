---
tags: [" #medroot"]
aliases: []
roots: [nas-]
forms: [combining]
alphabet:: N
definition: [nose]
---
>[!Note] DEFINITION of nas-
>nose
_____
>[!info]+ ETYMOLOGY of nas-
>#latin nasus
_____
>[!example]+ RELATED TERMS to nas-
>
>| [[nas-]]  | nose |
|:---------:|:----:|
| [[rhin-]] | YES     |
_____
>[!tip]+ DERIVATIONS of nas-
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
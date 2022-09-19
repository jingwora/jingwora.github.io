---
tags: [" #medroot"]
aliases: []
roots: [rhin-]
forms: [combining]
alphabet:: R
definition: [nose]
---
>[!Note] DEFINITION of rhin-
>nose
_____
>[!info]+ ETYMOLOGY of rhin-
>#greek rhis, rhinos
_____
>[!example]+ RELATED TERMS to rhin-
>
>| [[rhin-]] | nose |
|:---------:|:----:|
| [[nas-]]  | YES     |
_____
>[!tip]+ DERIVATIONS of rhin-
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
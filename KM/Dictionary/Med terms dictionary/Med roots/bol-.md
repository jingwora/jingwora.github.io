---
tags: [" #medroot"]
aliases: []
roots: [bol-]
forms: [combining]
alphabet:: B
definition: [a throwing, something thrown]
---
>[!Note] DEFINITION of bol-
>a throwing; something thrown, slung, cast, chucked
_____
>[!info]+ ETYMOLOGY of bol-
>#greek bole
_____
>[!example]+ RELATED TERMS to bol-
>
_____
>[!tip]+ DERIVATIONS of bol-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]

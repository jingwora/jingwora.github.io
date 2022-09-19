---
tags: [" #medroot"]
aliases: []
roots: [acanth]
forms: [combining]
alphabet:: A
definition: [thorn, spine]
---
>[!Note] DEFINITION of acanth-
>thorn, spine  (I don't think this is the backbone spine?)
_____
>[!info]+ ETYMOLOGY of acanth-
>#greek akantha
_____
>[!example]+ RELATED TERMS to acanth-
>
_____
>[!tip]+ DERIVATIONS of acanth-
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
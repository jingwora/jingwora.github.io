---
tags: [" #medroot"]
aliases: []
roots: [burs-]
forms: [combining]
alphabet:: B
definition: [bursa]
---
>[!Note] DEFINITION of burs-
>bursa (see also: [[asc-]])
_____
>[!info]+ ETYMOLOGY of burs-
>#latin bursa
_____
>[!example]+ RELATED TERMS to burs-
>
_____
>[!tip]+ DERIVATIONS of burs-
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
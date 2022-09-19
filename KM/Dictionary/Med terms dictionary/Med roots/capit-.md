---
tags: [" #medroot"]
aliases: []
roots: [capit-]
forms: [combining]
alphabet:: C
definition: [head]
---
>[!Note] DEFINITION of capit-
>#heat
_____
>[!info]+ ETYMOLOGY of capit-
>#latin caput, capitis
_____
>[!example]+ RELATED TERMS to capit-
>
>
_____
>[!tip]+ DERIVATIONS of capit-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
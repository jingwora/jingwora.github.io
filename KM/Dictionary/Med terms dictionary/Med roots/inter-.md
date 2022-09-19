---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [inter-]
alphabet:: I 
definition: [between]
---
>[!Note] DEFINITION of inter-
>between
_____
>[!info]+ ETYMOLOGY of inter-
>#latin
_____
>[!example]+ RELATED TERMS to inter-
>
_____
>[!tip]+ DERIVATIONS of inter-
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
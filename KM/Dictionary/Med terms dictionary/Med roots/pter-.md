---
tags: [" #medroot"]
aliases: []
roots: [pter-]
forms: [combining]
alphabet:: P
definition: [wing]
---
>[!Note] DEFINITION of pter-
>wing
_____
>[!info]+ ETYMOLOGY of pter-
>#greek pteron
_____
>[!example]+ RELATED TERMS to pter-
>
_____
>[!tip]+ DERIVATIONS of pter-
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
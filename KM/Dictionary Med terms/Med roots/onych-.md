---
tags: [" #medroot"]
aliases: []
roots: [onych-]
forms: [combining]
alphabet:: O
definition: [fingernail, toenail]
---
>[!Note] DEFINITION of onych-
>fingernail, toenail
_____
>[!info]+ ETYMOLOGY of onych-
>#grek onyx, onycho
_____
>[!example]+ RELATED TERMS to onych-
>
_____
>[!tip]+ DERIVATIONS of onych-
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
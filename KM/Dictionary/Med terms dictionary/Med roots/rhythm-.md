---
tags: [" #medroot"]
aliases: []
roots: [rhythm-]
forms: [combining]
alphabet:: R
definition: [heartbeat]
---
>[!Note] DEFINITION of rhythm-
>heartbeat
_____
>[!info]+ ETYMOLOGY of rhythm-
>#greek rhythmos (steady motion)
_____
>[!example]+ RELATED TERMS to rhythm-
>
_____
>[!tip]+ DERIVATIONS of rhythm-
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
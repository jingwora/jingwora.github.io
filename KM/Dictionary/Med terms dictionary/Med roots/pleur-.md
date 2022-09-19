---
tags: [" #medroot"]
aliases: []
roots: [pleur-]
forms: [combining]
alphabet:: P
definition: [pleura]
---
>[!Note] DEFINITION of pleur-
>pleura (thoracic membrane around lungs)
_____
>[!info]+ ETYMOLOGY of pleur-
>#greek pleura
_____
>[!example]+ RELATED TERMS to pleur-
>
_____
>[!tip]+ DERIVATIONS of pleur-
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
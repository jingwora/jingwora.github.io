---
tags: [" #medroot"]
aliases: []
roots: [pod-]
forms: [combining]
alphabet:: P
definition: [foot]
---
>[!Note] DEFINITION of pod-
>foot
_____
>[!info]+ ETYMOLOGY of pod-
>#greek pous, podos
_____
>[!example]+ RELATED TERMS to pod-
>
_____
>[!tip]+ DERIVATIONS of pod-
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
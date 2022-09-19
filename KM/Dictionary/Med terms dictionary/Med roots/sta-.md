---
tags: [" #medroot"]
aliases: [stat-]
roots: [sta-, stat-]
forms: [combining]
alphabet:: S
definition: [stand, stop]
---
>[!Note] DEFINITION of sta-
>stand, stop
_____
>[!info]+ ETYMOLOGY of sta-
>#greek histanai
_____
>[!example]+ RELATED TERMS to sta-
>
_____
>[!tip]+ DERIVATIONS of sta-
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
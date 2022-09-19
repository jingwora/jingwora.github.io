---
tags: [" #medroot"]
aliases: [stol-]
roots: [stal-, stol-]
forms: [combining]
alphabet:: S
definition: [send, contraction]
---
>[!Note] DEFINITION of stal-
>send, contraction
_____
>[!info]+ ETYMOLOGY of stal-
>#greek stellein
_____
>[!example]+ RELATED TERMS to stal-
>
_____
>[!tip]+ DERIVATIONS of stal-
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
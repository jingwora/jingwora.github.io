---
tags: [" #medroot"]
aliases: []
roots: [proct-]
forms: [combining]
alphabet:: P
definition: [anus]
---
>[!Note] DEFINITION of proct-
>anus
_____
>[!info]+ ETYMOLOGY of proct-
>#greek proktos
_____
>[!example]+ RELATED TERMS to proct-
>
_____
>[!tip]+ DERIVATIONS of proct-
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
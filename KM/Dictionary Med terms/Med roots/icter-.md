---
tags: [" #medroot"]
aliases: []
roots: [icter-]
forms: [combining]
alphabet:: I
definition: [jaundice]
---
>[!Note] DEFINITION of icter-
>jaundice
_____
>[!info]+ ETYMOLOGY of icter-
>#greek ikteros
_____
>[!example]+ RELATED TERMS to icter-
>
_____
>[!tip]+ DERIVATIONS of icter-
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
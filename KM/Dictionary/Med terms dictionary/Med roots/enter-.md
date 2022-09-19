---
tags: [" #medroot"]
aliases: []
roots: [enter-]
forms: [combining]
alphabet:: E
definition: [intestine]
---
>[!Note] DEFINITION of enter-
>(small) intestine
_____
>[!info]+ ETYMOLOGY of enter-
>#greek enteron
_____
>[!example]+ RELATED TERMS to enter-
>
_____
>[!tip]+ DERIVATIONS of enter-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
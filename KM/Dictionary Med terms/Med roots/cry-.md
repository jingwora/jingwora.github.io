---
tags: [" #medroot"]
aliases: [crym-]
roots: [cry-, crym-]
forms: [combining]
alphabet:: C
definition: [icy cold]
---
>[!Note] DEFINITION of cry-
>icy cold
_____
>[!info]+ ETYMOLOGY of cry-
>#greek kry(m)os
_____
>[!example]+ RELATED TERMS to cry-
>
_____
>[!tip]+ DERIVATIONS of cry-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
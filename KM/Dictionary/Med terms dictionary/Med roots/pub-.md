---
tags: [" #medroot"]
aliases: []
roots: [pub-]
forms: [combining]
alphabet:: P
definition: [pubic hair, pubic bone, pubic region, pubis]
---
>[!Note] DEFINITION of pub-
>pubic hair, pubic bone, pubic region, pubis
>*see also: [[puber-]] (puberty)*
_____
>[!info]+ ETYMOLOGY of pub-
>#latin pubes
_____
>[!example]+ RELATED TERMS to pub-
>
_____
>[!tip]+ DERIVATIONS of pub-
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
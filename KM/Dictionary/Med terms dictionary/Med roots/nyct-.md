---
tags: [" #medroot"]
aliases: []
roots: [nyct-]
forms: [combining]
alphabet:: N
definition: [night]
---
>[!Note] DEFINITION of nyct-
>night
_____
>[!info]+ ETYMOLOGY of nyct-
>#greek nyx, nyctos
_____
>[!example]+ RELATED TERMS to nyct-
>
_____
>[!tip]+ DERIVATIONS of nyct-
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
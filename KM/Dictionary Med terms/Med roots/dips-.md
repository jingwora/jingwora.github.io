---
tags: [" #medroot"]
aliases: []
roots: [dips-]
forms: [combining]
alphabet:: D
definition: [thirst]
---
>[!Note] DEFINITION of dips-
>thirst
_____
>[!info]+ ETYMOLOGY of dips-
>#greek dipsa
_____
>[!example]+ RELATED TERMS to dips-
>
_____
>[!tip]+ DERIVATIONS of dips-
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
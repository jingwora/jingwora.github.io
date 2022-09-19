---
tags: [" #medroot"]
aliases: [prosth-]
roots: [pros-, prosth-]
forms: [prefix]
alphabet:: P
definition: [in place of]
---
>[!Note] DEFINITION of pros-
>in place of 
_____
>[!info]+ ETYMOLOGY of pros-
>#greek
_____
>[!example]+ RELATED TERMS to pros-
>
_____
>[!tip]+ DERIVATIONS of pros-
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
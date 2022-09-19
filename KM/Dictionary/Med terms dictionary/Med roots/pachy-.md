---
tags: [" #medroot"]
aliases: []
roots: [pachy-]
forms: [combining]
alphabet:: P
definition: [thick]
---
>[!Note] DEFINITION of pachy-
>thick
_____
>[!info]+ ETYMOLOGY of pachy-
>#greek pachys
_____
>[!example]+ RELATED TERMS to pachy-
>
_____
>[!tip]+ DERIVATIONS of pachy-
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
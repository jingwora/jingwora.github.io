---
tags: [" #medroot"]
aliases: [-agogue]
roots: [agog-, -agogue]
forms: [combining]
alphabet:: A
definition: [leading, drawing forth]
---
>[!Note] DEFINITION of agog-
>(agent) leading, drawing forth
_____
>[!info]+ ETYMOLOGY of agog-
>#greek agogos
_____
>[!example]+ RELATED TERMS to agog-
>
_____
>[!tip]+ DERIVATIONS of agog-
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
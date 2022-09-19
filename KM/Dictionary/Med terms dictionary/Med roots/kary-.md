---
tags: [" #medroot"]
aliases: []
roots: [kary-]
forms: [combining]
alphabet:: K
definition: [nucleus, kernal]
---
>[!Note] DEFINITION of kary-
>nucleus, kernal
_____
>[!info]+ ETYMOLOGY of kary-
>#greek karyon (nut)
_____
>[!example]+ RELATED TERMS to kary-
>
_____
>[!tip]+ DERIVATIONS of kary-
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
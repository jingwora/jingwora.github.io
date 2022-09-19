---
tags: [" #medroot"]
aliases: [thanat-]
roots: [than-, thanat-]
forms: [combining]
alphabet:: T
definition: [death]
---
>[!Note] DEFINITION of than-
>death
>*see also: [[necr-]] (dead)*
_____
>[!info]+ ETYMOLOGY of than-
>#greek thanatos
_____
>[!example]+ RELATED TERMS to than-
>
_____
>[!tip]+ DERIVATIONS of than-
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
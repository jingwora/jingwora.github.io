---
tags: [" #medroot"]
aliases: []
roots: [brachy-]
forms: [combining]
alphabet:: B
definition: [short]
---
>[!Note] DEFINITION of brachy-
>short
_____
>[!info]+ ETYMOLOGY of brachy-
>#greek brachys
_____
>[!example]+ RELATED TERMS to brachy-
>	
_____
>[!tip]+ DERIVATIONS of brachy-
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
---
tags: [" #medroot"]
aliases: [chir-]
roots: [cheir-, chir-]
forms: [combining]
alphabet:: C
definition: [hand]
---
>[!Note] DEFINITION of cheir-
>hand
_____
>[!info]+ ETYMOLOGY of cheir-
>#greek cheir
_____
>[!example]+ RELATED TERMS to cheir-
>	
_____
>[!tip]+ DERIVATIONS of cheir-
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
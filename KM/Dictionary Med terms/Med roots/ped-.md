---
tags: [" #medroot"]
aliases: []
roots: [ped-]
forms: [combining]
alphabet:: P
definition: [child]
---
>[!Note] DEFINITION of ped-
>child
_____
>[!info]+ ETYMOLOGY of ped-
>#greek pais, paidos
_____
>[!example]+ RELATED TERMS to ped-
>
_____
>[!tip]+ DERIVATIONS of ped-
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
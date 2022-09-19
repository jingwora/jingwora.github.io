---
tags: [" #medroot"]
aliases: []
roots: [lepid-]
forms: [combining]
alphabet:: L
definition: [scale]
---
>[!Note] DEFINITION of lepid-
>scale (of an animal)
_____
>[!info]+ ETYMOLOGY of lepid-
>#greek lepsis, lepidos
_____
>[!example]+ RELATED TERMS to lepid-
>
_____
>[!tip]+ DERIVATIONS of lepid-
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
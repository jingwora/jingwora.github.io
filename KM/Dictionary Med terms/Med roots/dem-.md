---
tags: [" #medroot"]
aliases: []
roots: [dem-]
forms: [combining]
alphabet:: D
definition: [people, population]
---
>[!Note] DEFINITION of dem-
>people, population
_____
>[!info]+ ETYMOLOGY of dem-
>#greek demos
_____
>[!example]+ RELATED TERMS to dem-
>
_____
>[!tip]+ DERIVATIONS of dem-
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
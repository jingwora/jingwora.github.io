---
tags: [" #medroot"]
aliases: []
roots: [scrot-]
forms: [combining]
alphabet:: S
definition: [scrotum]
---
>[!Note] DEFINITION of scrot-
>scrotum
_____
>[!info]+ ETYMOLOGY of scrot-
>#latin scrotum (bag)
_____
>[!example]+ RELATED TERMS to scrot-
>
_____
>[!tip]+ DERIVATIONS of scrot-
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
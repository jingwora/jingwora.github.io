---
tags: [" #medroot"]
aliases: []
roots: [pip-]
forms: [combining]
alphabet:: P
definition: [peep, chirp]
---
>[!Note] DEFINITION of pip-
>peep, chirp
_____
>[!info]+ ETYMOLOGY of pip-
>#latin pipire
_____
>[!example]+ RELATED TERMS to pip-
>
_____
>[!tip]+ DERIVATIONS of pip-
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
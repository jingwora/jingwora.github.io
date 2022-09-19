---
tags: [" #medroot"]
aliases: []
roots: [-lent]
forms: [suffix, adjective]
alphabet:: L
definition: [full of]
---
>[!Note] DEFINITION of -lent
>forms adjectives: full of
_____
>[!info]+ ETYMOLOGY of -lent
>#latin
_____
>[!example]+ RELATED TERMS to -lent
>
>| [[-lent]] | full of |       -       |          -          |
|:---------:|:-------:|:-------------:|:-------------------:|
| [[-ous]]  |   YES   | pertaining to |  characterized by   |
| [[-ose]]  |   YES   |  resembling   | chemical substances |
_____
>[!tip]+ DERIVATIONS of -lent
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
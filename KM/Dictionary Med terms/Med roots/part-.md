---
tags: [" #medroot"]
aliases: []
roots: [part-]
forms: [combining]
alphabet:: P
definition: [give birth]
---
>[!Note] DEFINITION of part-
>give birth
_____
>[!info]+ ETYMOLOGY of part-
>#latin parere, partus
_____
>[!example]+ RELATED TERMS to part-
>
>| [[part-]]  | give birth |      -      |
|:----------:|:----------:|:-----------:|
| [[genit-]] |    YES     | bring forth |
| [[-para]]  |    YES     | -            |
_____
>[!tip]+ DERIVATIONS of part-
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
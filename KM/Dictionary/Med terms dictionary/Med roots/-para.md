---
tags: [" #medroot"]
aliases: []
roots: [-para]
forms: [combining]
alphabet:: P
definition: [give birth]
---
>[!Note] DEFINITION of -para
>give birth
_____
>[!info]+ ETYMOLOGY of -para
>#latin parere, partus
_____
>[!example]+ RELATED TERMS to -para
>
| [[-para]]  | give birth |      -      |
|:----------:|:----------:|:-----------:|
| [[genit-]] |    YES     | bring forth |
| [[part-]]  |    YES     |      -      |
_____
>[!tip]+ DERIVATIONS of -para
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
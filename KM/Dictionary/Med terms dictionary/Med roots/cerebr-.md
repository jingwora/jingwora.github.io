---
tags: [" #medroot"]
aliases: []
roots: [cerebr-]
forms: [combining]
alphabet:: C
definition: [brain]
---
>[!Note] DEFINITION of cerebr-
>brain
_____
>[!info]+ ETYMOLOGY of cerebr-
>#latin cerebrum
_____
>[!example]+ RELATED TERMS to cerebr-
>
|  [[cerebr-]]  | brain |
|:-------------:|:-----:|
| [[encephal-]] |  YES  |
>
_____
>[!tip]+ DERIVATIONS of cerebr-
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
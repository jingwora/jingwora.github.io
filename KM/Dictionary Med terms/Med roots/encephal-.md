---
tags: [" #medroot"]
aliases: []
roots: [encephal-]
forms: [combining]
alphabet:: E
definition: [brain]
---
>[!Note] DEFINITION of encephal-
>[[en-]][[cephal-]] - brain (in head)
_____
>[!info]+ ETYMOLOGY of encephal-
>#greek enkephalon
_____
>[!example]+ RELATED TERMS to encephal-
>
>|  [[encephal-]]  | brain |
|:-------------:|:-----:|
| [[cerebr-]] |  YES  |
_____
>[!tip]+ DERIVATIONS of encephal-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
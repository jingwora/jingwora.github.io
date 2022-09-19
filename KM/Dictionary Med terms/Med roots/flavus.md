---
tags: [" #medroot"]
aliases: []
roots: [flavus]
forms: [combining]
alphabet:: F
definition: [golden-yellow]
---
>[!Note] DEFINITION of flavus
>golden-yellow
_____
>[!info]+ ETYMOLOGY of flavus
>#latin flavus
_____
>[!example]+ RELATED TERMS to flavus
>
>| [[flavus]]  | golden-yellow |
|:----------:|:-------------:|
| [[aure-]] |      YES      |
_____
>[!tip]+ DERIVATIONS of flavus
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
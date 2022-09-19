---
tags: [" #medroot"]
aliases: []
roots: [aure-]
forms: [combining]
alphabet:: A
definition: [golden-yellow]
---
>[!Note] DEFINITION of aure-
>golden-yellow
_____
>[!info]+ ETYMOLOGY of aure-
>#latin aureus (marcus aureleus = yellowish Mark)
_____
>[!example]+ RELATED TERMS to aure-
>
>| [[aure-]]  | golden-yellow |
|:----------:|:-------------:|
| [[flavus]] |      YES      |
_____
>[!tip]+ DERIVATIONS of aure-
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
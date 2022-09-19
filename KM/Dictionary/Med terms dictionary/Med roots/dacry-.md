---
tags: [" #medroot"]
aliases: []
roots: [dacry-]
forms: [combining]
alphabet:: D
definition: [tear, lacrimal sac or duct]
---
>[!Note] DEFINITION of dacry-
>tear, lacrimal sac, lacrimal duct
_____
>[!info]+ ETYMOLOGY of dacry-
>#greek dakryon
_____
>[!example]+ RELATED TERMS to dacry-
>
>| [[dacry-]]  | tear | lacrimal sac or duct |
|:-----------:|:----:|:--------------------:|
| [[lacrim-]] | YES  |          -           |
_____
>[!tip]+ DERIVATIONS of dacry-
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
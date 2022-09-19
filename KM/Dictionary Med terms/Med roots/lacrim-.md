---
tags: [" #medroot"]
aliases: []
roots: [lacrim-]
forms: [combining]
alphabet:: L
definition: [tear]
---
>[!Note] DEFINITION of lacrim-
>tear
_____
>[!info]+ ETYMOLOGY of lacrim-
>#latin lacrima
_____
>[!example]+ RELATED TERMS to lacrim-
>
>| [[lacrim-]] | tear |  -  |
|:-----------:|:----:|:---:|
| [[dacry-]]  | YES  | lacrimal sac or duct    |
_____
>[!tip]+ DERIVATIONS of lacrim-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
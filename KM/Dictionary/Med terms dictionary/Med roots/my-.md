---
tags: [" #medroot"]
aliases: []
roots: [my-]
forms: [combining]
alphabet:: M
definition: [close, shut]
---
>[!Note] DEFINITION of my-
>close, shut
_____
>[!info]+ ETYMOLOGY of my-
>#greek myein
_____
>[!example]+ RELATED TERMS to my-
>
>|  [[my-]]   | close | shut |
|:----------:|:-----:|:----:|
| [[-clud-]] |  YES  | -     |
_____
>[!tip]+ DERIVATIONS of my-
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
---
tags: [" #medroot"]
aliases: []
roots: [chaet-]
forms: [combining]
alphabet:: C
definition: [hair]
---
>[!Note] DEFINITION of chaet-
>hair
_____
>[!info]+ ETYMOLOGY of chaet-
>#greek chaite
_____
>[!example]+ RELATED TERMS to chaet-
>
>| [[chaet-]] | hair |
|:----------:|:----:|
| [[trich-]] | YES  |
_____
>[!tip]+ DERIVATIONS of chaet-
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
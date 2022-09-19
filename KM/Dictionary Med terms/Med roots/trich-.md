---
tags: [" #medroot"]
aliases: []
roots: [trich-]
forms: [combining]
alphabet:: T
definition: [hair]
---
>[!Note] DEFINITION of trich-
>hair
_____
>[!info]+ ETYMOLOGY of trich-
>#greek thrix, thrichos
_____
>[!example]+ RELATED TERMS to trich-
>
| [[trich-]] | hair |
|:----------:|:----:|
| [[chaet-]] | YES  |
_____
>[!tip]+ DERIVATIONS of trich-
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
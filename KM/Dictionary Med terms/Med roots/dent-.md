---
tags: [" #medroot"]
aliases: []
roots: [dent-]
forms: [combining]
alphabet:: D
definition: [tooth]
---
>[!Note] DEFINITION of dent-
>tooth
_____
>[!info]+ ETYMOLOGY of dent-
>#latin dens, dentis
_____
>[!example]+ RELATED TERMS to dent-
>
>| [[dent-]]  | tooth |
|:----------:|:-----:|
| [[odont-]] |  YES  |
_____
>[!tip]+ DERIVATIONS of dent-
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
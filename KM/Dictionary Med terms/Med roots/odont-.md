---
tags: [" #medroot"]
aliases: []
roots: [odont-]
forms: [combining]
alphabet:: O
definition: [tooth]
---
>[!Note] DEFINITION of odont-
>tooth
_____
>[!info]+ ETYMOLOGY of odont-
>#greek odous, odontos
_____
>[!example]+ RELATED TERMS to odont-
>
>| [[dent-]]  | tooth |
|:----------:|:-----:|
| [[odont-]] |  YES  |
_____
>[!tip]+ DERIVATIONS of odont-
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
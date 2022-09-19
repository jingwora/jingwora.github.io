---
tags: [" #medroot"]
aliases: []
roots: [opt-]
forms: [combining]
alphabet:: O
definition: [vision, eye]
---
>[!Note] DEFINITION of opt-
>1. vision
>2. eye
_____
>[!info]+ ETYMOLOGY of opt-
>#greek optos (seen)
_____
>[!example]+ RELATED TERMS to opt-
>
>|   [[opt-]]    | vision | eye |
|:-------------:|:------:|:---:|
|   [[ocul-]]   |   -    | YES |
|    [[op-]]    |  YES   |  -  |
| [[ophthalm-]] |   -    | YES    |
_____
>[!tip]+ DERIVATIONS of opt-
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
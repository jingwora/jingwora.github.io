---
tags: [" #medroot"]
aliases: []
roots: [ophthalm-]
forms: [combining]
alphabet:: O
definition: [eye]
---
>[!Note] DEFINITION of ophthalm-
>eye
_____
>[!info]+ ETYMOLOGY of ophthalm-
>#greek ophthalmos
_____
>[!example]+ RELATED TERMS to ophthalm-
>
>|   [[ocul-]]   | eye |  -  |
|:-------------:|:---:|:---:|
| [[ophthalm-]] | YES |  -  |
|   [[opt-]]    | YES | vision    |
_____
>[!tip]+ DERIVATIONS of ophthalm-
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
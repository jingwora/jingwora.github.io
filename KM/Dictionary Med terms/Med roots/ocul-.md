---
tags: [" #medroot"]
aliases: []
roots: [ocul-]
forms: [combining]
alphabet:: O
definition: [eye]
---
>[!Note] DEFINITION of ocul-
>eye
_____
>[!info]+ ETYMOLOGY of ocul-
>#latin oculus
_____
>[!example]+ RELATED TERMS to ocul-
>
>|   [[ocul-]]   | eye |  -  |
|:-------------:|:---:|:---:|
| [[ophthalm-]] | YES |  -  |
|   [[opt-]]    | YES | vision    |
_____
>[!tip]+ DERIVATIONS of ocul-
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
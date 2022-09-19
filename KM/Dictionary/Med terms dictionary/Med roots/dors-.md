---
tags: [" #medroot"]
aliases: []
roots: [dors-]
forms: [combining]
alphabet:: D
definition: [back]
---
>[!Note] DEFINITION of dors-
>back (of the body)
_____
>[!info]+ ETYMOLOGY of dors-
>#latin dorsum
_____
>[!example]+ RELATED TERMS to dors-
>
>| [[dors-]] | back |   -   |    -    |
|:---------:|:----:|:-----:|:-------:|
| [[ana-]]  | YES  |  up   | against |
| [[pali-]] | YES  | again |    -    |
|  [[re-]]  | YES  | again | -        |
_____
>[!tip]+ DERIVATIONS of dors-
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
---
tags: [" #medroot"]
aliases: []
roots: [-doch-]
forms: [combining]
alphabet:: D
definition: [duct]
---
>[!Note] DEFINITION of -doch-
>duct (see also: [[dolich-]])
_____
>[!info]+ ETYMOLOGY of -doch-
>#greek dochos
_____
>[!example]+ RELATED TERMS to -doch-
>
>| [[-doch-]] | duct |   -    |
|:----------:|:----:|:------:|
| [[angi-]]  | YES  | vessel |
|  [[por-]]  | YES  | passage, opening, pore, cavity       |
_____
>[!tip]+ DERIVATIONS of -doch-
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
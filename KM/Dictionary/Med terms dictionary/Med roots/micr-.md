---
tags: [" #medroot"]
aliases: []
roots: [micr-]
forms: [combining]
alphabet:: M
definition: [small]
---
>[!Note] DEFINITION of micr-
>(abnormally) small
_____
>[!info]+ ETYMOLOGY of micr-
>#greek mikros
_____
>[!example]+ RELATED TERMS to micr-
>
>|  [[micr-]]  | small |         -         |
|:----------:| :-----: |:-----------------:|
| [[-cle]]  | YES   |         -         |
| [[-ule]] | YES   | - |
|  [[-ellus]]   | YES   |         -         |
|  [[-il]]  | YES   |         biological genera         |
|  [[-ole]]  | YES   |         -         |
_____
>[!tip]+ DERIVATIONS of micr-
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

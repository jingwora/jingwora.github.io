---
tags: [" #medroot"]
aliases: [-ella, -ellum]
roots: [-ellus, -ella, -ellum]
forms: [suffix, noun, diminutive]
alphabet:: E
definition: [biological genera, small]
---
>[!Note] DEFINITION of -ellus
>1. forms biological genera
>2. forms diminutives: small
_____
>[!info]+ ETYMOLOGY of -ellus
>#latin
_____
>[!example]+ RELATED TERMS to -ellus
>
>|  [[-ellus]]  | small |         biological genera         |
|:----------:| :-----: |:-----------------:|
| [[-cle]]  | YES   |         -         |
| [[micr-]] | YES   | - |
|  [[-il]]   | YES   |         -         |
|  [[-ole]]  | YES   |         -         |
|  [[-ule]]  | YES   |         -         |
>
_____
>[!tip]+ DERIVATIONS of -ellus
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
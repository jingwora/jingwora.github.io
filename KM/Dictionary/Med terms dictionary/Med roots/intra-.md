---
tags: [" #medroot"]
aliases: [intro-]
forms: [prefix]
roots: [intra-, intro-]
alphabet:: I
definition: [within]
---
>[!Note] DEFINITION of intra-
>within
_____
>[!info]+ ETYMOLOGY of intra-
>#latin
>- intro- (rare)
_____
>[!example]+ RELATED TERMS to intra-
>
>| [[intra-]] | within |   -   |  -   |
|:----------:| ------ |:-----:|:----:|
|  [[en-]]   | YES    |  in   | into |
| [[endo-]]  | YES    |   -   |  -   |
|  [[eso-]]  | YES    | inner | inward     |
_____
>[!tip]+ DERIVATIONS of intra-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
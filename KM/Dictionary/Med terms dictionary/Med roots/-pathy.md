---
tags: [" #medroot"]
aliases: []
roots: [-pathy]
forms: [compound suffix form, noun]
alphabet:: P
definition: [disease]
---
>[!Note] DEFINITION of -pathy
>forms nouns: [[path-]][[-y]] - disease
_____
>[!info]+ ETYMOLOGY of -pathy
>
_____
>[!example]+ RELATED TERMS to -pathy
>
>| [[-pathy]] | disease |         -          |          -           |
|:----------:|:-------:|:------------------:|:--------------------:|
| [[-iasis]] |   YES   | abnormal condition | abnormal presence of |
|  [[nos-]]  |   YES   |      illness       |          -           |
|  [[-oma]]  |   YES   |       tumor        |          -           |
| [[path-]]  |   YES   |         -          | -                     |
_____
>[!tip]+ DERIVATIONS of -pathy
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
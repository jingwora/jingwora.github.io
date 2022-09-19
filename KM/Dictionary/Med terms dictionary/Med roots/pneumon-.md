---
tags: [" #medroot"]
aliases: [pneum(on)-]
roots: [pneumon-, pneum(on)-]
forms: [combining]
alphabet:: P
definition: [lung]
---
>[!Note] DEFINITION of pneumon-
>lung
_____
>[!info]+ ETYMOLOGY of pneumon-
>#greek pneumon
_____
>[!example]+ RELATED TERMS to pneumon-
>
>| [[pneumon-]] | lung |  -  |
|:------------:|:----:|:---:|
|  [[pulm-]]   | YES  | pulmonary artery    |
_____
>[!tip]+ DERIVATIONS of pneumon-
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
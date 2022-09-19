---
tags: [" #medroot"]
aliases: []
roots: [sten-]
forms: [combining]
alphabet:: S
definition: [narrow]
---
>[!Note] DEFINITION of sten-
>narrow
_____
>[!info]+ ETYMOLOGY of sten-
>#greek stenos
_____
>[!example]+ RELATED TERMS to sten-
>
>|  [[sten-]]  | narrow |  -   |  -  |
|:-----------:|:------:|:----:|:---:|
| [[dolich-]] |  YES   | long | slender    |
_____
>[!tip]+ DERIVATIONS of sten-
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
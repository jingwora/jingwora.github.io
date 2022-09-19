---
tags: [" #medroot"]
aliases: []
roots: [macr-]
forms: [combining]
alphabet:: M
definition: [large, long]
---
>[!Note] DEFINITION of macr-
>(abnormally) large or long
_____
>[!info]+ ETYMOLOGY of macr-
>#greek makros
_____
>[!example]+ RELATED TERMS to macr-
>
>|  [[macr-]]  | large | long |        -        |
|:-----------:|:-----:|:----:|:---------------:|
| [[dolich-]] |   -   | YES  | narrow, slender |
|  [[mega-]]  |  YES  | YES  | -                |
_____
>[!tip]+ DERIVATIONS of macr-
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
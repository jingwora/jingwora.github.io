---
tags: [" #medroot"]
aliases: [megal-]
roots: [mega-, megal-]
forms: [combining]
alphabet:: M
definition: [large, long]
---
>[!Note] DEFINITION of mega-
>(abnormally large or long)
_____
>[!info]+ ETYMOLOGY of mega-
>#greek mega, megalou
_____
>[!example]+ RELATED TERMS to mega-
>
|  [[mega-]]  | large | long |        -        |
|:-----------:|:-----:|:----:|:---------------:|
| [[dolich-]] |   -   | YES  | narrow, slender |
|  [[macr-]]  |  YES  | YES  | -                |
_____
>[!tip]+ DERIVATIONS of mega-
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
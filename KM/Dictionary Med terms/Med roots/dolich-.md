---
tags: [" #medroot"]
aliases: []
roots: [dolich-]
forms: [combining]
alphabet:: D
definition: [long, narrow, slender]
---
>[!Note] DEFINITION of dolich-
>long, narrow, slender (see also: [[-doch-]])
_____
>[!info]+ ETYMOLOGY of dolich-
>#greek dolichos
_____
>[!example]+ RELATED TERMS to dolich-
>
>| [[dolich-]] | long | narrow | slender |   -   |
|:-----------:|:----:|:------:| ------- |:-----:|
|  [[macr-]]  | YES  |   -    | -       | large |
|  [[mega-]]  | YES  |   -    | -       | large |
|  [[sten-]]  |  -   |  YES   | -       | -      |
_____
>[!tip]+ DERIVATIONS of dolich-
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
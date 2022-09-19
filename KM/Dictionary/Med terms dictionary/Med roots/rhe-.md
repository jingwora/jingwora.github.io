---
tags: [" #medroot"]
aliases: [rheumat-]
roots: [rhe-, rheumat-]
forms: [combining]
alphabet:: R
definition: [flow, secrete]
---
>[!Note] DEFINITION of rhe-
>flow, secrete
>*note: greek words that start with "r" often get duplicated to "rr"*
_____
>[!info]+ ETYMOLOGY of rhe-
>#greek rhein
_____
>[!example]+ RELATED TERMS to rhe-
>
>|  [[rhe-]]   | flow | secrete |     -     |
|:-----------:|:----:|:-------:|:---------:|
|  [[crin-]]  |  -   |   YES   | secretion |
|  [[flu-]]   | YES  |    -    |     -     |
| [[gurgit-]] | YES  |    -    | flood          |
_____
>[!tip]+ DERIVATIONS of rhe-
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
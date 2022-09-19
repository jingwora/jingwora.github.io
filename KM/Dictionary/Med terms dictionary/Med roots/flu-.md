---
tags: [" #medroot"]
aliases: []
roots: [flu-]
forms: [combining]
alphabet:: F
definition: [flow]
---
>[!Note] DEFINITION of flu-
>flow
_____
>[!info]+ ETYMOLOGY of flu-
>#latin, fluere
_____
>[!example]+ RELATED TERMS to flu-
>
>|  [[flu-]]   | flow |   -   |
|:-----------:|:----:|:-----:|
| [[gurgit-]] | YES  | flood |
|  [[rhe-]]   | YES  | secrete      |
_____
>[!tip]+ DERIVATIONS of flu-
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
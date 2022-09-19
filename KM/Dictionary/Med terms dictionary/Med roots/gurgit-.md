---
tags: [" #medroot"]
aliases: [gurgitat-]
roots: [gurgit-, gurgitat-]
forms: [combining]
alphabet:: G
definition: [flood, flow]
---
>[!Note] DEFINITION of gurgit-
>flood, blow
_____
>[!info]+ ETYMOLOGY of gurgit-
>#latin gurgitare, gurgitatus
_____
>[!example]+ RELATED TERMS to gurgit-
>
>| [[gurgit-]] | flow | flood |  -  |
|:-----------:|:----:|:-----:|:---:|
|  [[flu-]]   | YES  |   -   |  -  |
|  [[rhe-]]   | YES  |   -   | secrete    |
_____
>[!tip]+ DERIVATIONS of gurgit-
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
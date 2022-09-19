---
tags: [" #medroot"]
aliases: [-posterior]
roots: [poster-, -posterior]
forms: [combining]
alphabet:: P
definition: [behind, in back]
---
>[!Note] DEFINITION of poster-
>behind, in back
_____
>[!info]+ ETYMOLOGY of poster-
>#latin posterior
_____
>[!example]+ RELATED TERMS to poster-
>
>| [[poster-]] | behind | in back |        -         |
|:-----------:|:------:|:-------:|:----------------:|
|  [[meta-]]  |  YES   |   YES   |     backward     |
|  [[post-]]  |  YES   |    -    | after, following |
| [[retro-]]  |  YES   |   YES   | backward                 |
_____
>[!tip]+ DERIVATIONS of poster-
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
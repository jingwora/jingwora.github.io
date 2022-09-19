---
tags: [" #medroot"]
aliases: []
roots: [pyret-]
forms: [combining]
alphabet:: P
definition: [fever]
---
>[!Note] DEFINITION of pyret-
>fever
_____
>[!info]+ ETYMOLOGY of pyret-
>#greek pyretso
_____
>[!example]+ RELATED TERMS to pyret-
>
>|  [[pyret-]]  | fever | - |
|:----------:|:-----:|:-------:|
| [[febr-]]  |  YES  |    -    |
| [[pyr-]] |  YES  | burning        |
_____
>[!tip]+ DERIVATIONS of pyret-
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
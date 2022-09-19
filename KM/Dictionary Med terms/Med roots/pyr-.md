---
tags: [" #medroot"]
aliases: []
roots: [pyr-]
forms: [combining]
alphabet:: P
definition: [fever, burning]
---
>[!Note] DEFINITION of pyr-
>fever, burning
_____
>[!info]+ ETYMOLOGY of pyr-
>#greek pyr, pyros (fire)
_____
>[!example]+ RELATED TERMS to pyr-
>
>|  [[pyr-]]  | fever | burning |
|:----------:|:-----:|:-------:|
| [[febr-]]  |  YES  |    -    |
| [[pyret-]] |  YES  | -        |
_____
>[!tip]+ DERIVATIONS of pyr-
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
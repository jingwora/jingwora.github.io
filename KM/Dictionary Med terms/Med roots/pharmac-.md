---
tags: [" #medroot"]
aliases: [pharmaceu-]
roots: [pharmac-, pharmaceu-]
forms: [combining]
alphabet:: P
definition: [medicine, drug]
---
>[!Note] DEFINITION of pharmac-
>medicine, drug
_____
>[!info]+ ETYMOLOGY of pharmac-
>#greek pharmakon
_____
>[!example]+ RELATED TERMS to pharmac-
>
>| [[pharmac-]] | medicine | drug |   -   |              -               |  -  |
|:------------:|:--------:|:----:|:-----:|:----------------------------:|:---:|
|   [[-ic]]    |    -     | YES  | agent |        pertaining to         |  -  |
|  [[-itic]]   |    -     | YES  | agent | pertaining to (inflammation) |  -  |
|   [[-tic]]   |    -     | YES  | agent |        pertaining to         | person    |
_____
>[!tip]+ DERIVATIONS of pharmac-
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
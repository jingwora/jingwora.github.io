---
tags: [" #medroot"]
aliases: [-clus-]
roots: [-clud-, -clus-]
forms: [combining]
alphabet:: C
definition: [close]
---
>[!Note] DEFINITION of -clud-
>close
_____
>[!info]+ ETYMOLOGY of -clud-
>#latin claudere, clausus
_____
>[!example]+ RELATED TERMS to -clud-
>
>| [[-clud-]] | close |  -   | comments |
|:----------:|:-----:|:----:|:--------:|
|  [[my-]]   |  YES  | shut |      I think these are just homonyms?    |
_____
>[!tip]+ DERIVATIONS of -clud-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
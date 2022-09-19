---
tags: [" #medroot"]
aliases: []
roots: [diplo-]
forms: [combining]
alphabet:: D
definition: [double, twin]
---
>[!Note] DEFINITION of diplo-
>double, twin
_____
>[!info]+ ETYMOLOGY of diplo-
>#greek diploos
_____
>[!example]+ RELATED TERMS to diplo-
>
>| [[diplo-]] | double | twin |  -  |   -   |  -   |
|:----------:|:------:|:----:|:---:|:-----:|:----:|
|  [[bi-]]   |  YES   |  -   | two | twice | both |
|  [[di-]]   |  YES   |  -   | two | twice | -     |
_____
>[!tip]+ DERIVATIONS of diplo-
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
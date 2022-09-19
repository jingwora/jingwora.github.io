---
tags: [" #medroot"]
aliases: [phys(i)-]
roots: [phys(i)-, physi-]
forms: [combining]
alphabet:: P
definition: [nature, appearance]
---
>[!Note] DEFINITION of phys-
>nature, appearance
_____
>[!info]+ ETYMOLOGY of phys-
>#greek physis
_____
>[!example]+ RELATED TERMS to phys-
>
>| [[physi-]] | nature | appearnace |       -       |
|:----------:|:------:|:----------:|:-------------:|
| [[faci-]]  |   -    |    YES     | surface, face |
| [[-fici]]  |   -    |    YES     | surface, face              |
_____
>[!tip]+ DERIVATIONS of phys-
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
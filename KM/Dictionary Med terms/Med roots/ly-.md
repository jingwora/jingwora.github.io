---
tags: [" #medroot"]
aliases: [lys-]
roots: [ly-, lys-]
forms: [combining]
alphabet:: L
definition: [break down, destroy]
---
>[!Note] DEFINITION of ly-
>break down, destroy
_____
>[!info]+ ETYMOLOGY of ly-
>#greek lyein
_____
>[!example]+ RELATED TERMS to ly-
>
>| [[cla-]] | destroy | break (up) |
|:--------:|:-------:|:----------:|
| [[ly-]]  |   YES   |    YES     |
_____
>[!tip]+ DERIVATIONS of ly-
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
---
tags: [" #medroot"]
aliases: []
roots: [lact-]
forms: [combining]
alphabet:: L
definition: [milk]
---
>[!Note] DEFINITION of lact-
>milk
_____
>[!info]+ ETYMOLOGY of lact-
>#latin lac, lactis
_____
>[!example]+ RELATED TERMS to lact-
>
>| [[lact-]]  | milk |
|:---------:|:----:|
| [[gal-]] | YES  |
_____
>[!tip]+ DERIVATIONS of lact-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
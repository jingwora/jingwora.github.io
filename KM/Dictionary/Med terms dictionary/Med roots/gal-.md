---
tags: [" #medroot"]
aliases: [galact-]
roots: [gal-, galact-]
forms: [combining]
alphabet:: G
definition: [milk]
---
>[!Note] DEFINITION of gal-
>milk
_____
>[!info]+ ETYMOLOGY of gal-
>#greek gala, galaktos
_____
>[!example]+ RELATED TERMS to gal-
>
>| [[gal-]]  | milk |
|:---------:|:----:|
| [[lact-]] | YES  |
_____
>[!tip]+ DERIVATIONS of gal-
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
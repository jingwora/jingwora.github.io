---
tags: [" #medroot"]
aliases: []
roots: [phthir-]
forms: [combining]
alphabet:: P
definition: [louse]
---
>[!Note] DEFINITION of phthir-
>louse
_____
>[!info]+ ETYMOLOGY of phthir-
>#greek phtheir
_____
>[!example]+ RELATED TERMS to phthir-
>
>| [[phthir-]] | louse |
|:------------:|:-----:|
| [[pedicul-]]  | YES      |
_____
>[!tip]+ DERIVATIONS of phthir-
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
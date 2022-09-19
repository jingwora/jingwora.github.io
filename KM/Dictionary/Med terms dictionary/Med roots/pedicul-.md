---
tags: [" #medroot"]
aliases: []
roots: [pedicul-]
forms: [combining]
alphabet:: P
definition: [louse]
---
>[!Note] DEFINITION of pedicul-
>louse
_____
>[!info]+ ETYMOLOGY of pedicul-
>#latin pediculus
_____
>[!example]+ RELATED TERMS to pedicul-
>
>| [[pedicul-]] | louse |
|:------------:|:-----:|
| [[phthir-]]  | YES      |
_____
>[!tip]+ DERIVATIONS of pedicul-
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
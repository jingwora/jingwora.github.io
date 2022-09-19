---
tags: [" #medroot"]
aliases: [hemat-]
roots: [hem-, hemat-]
forms: [combining]
alphabet:: H
definition: [blood]
---
>[!Note] DEFINITION of hem-
>blood
_____
>[!info]+ ETYMOLOGY of hem-
>#greek haima, haimatos
_____
>[!example]+ RELATED TERMS to hem-
>
>| [[hem-]]    | blood |
| ----------- | ----- |
| [[-em-]]    | YES   |
| [[sangui-]] | YES      |
_____
>[!tip]+ DERIVATIONS of hem-
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
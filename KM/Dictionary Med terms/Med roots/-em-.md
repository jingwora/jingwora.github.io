---
tags: [" #medroot"]
aliases: []
roots: [-em-]
forms: [combining]
alphabet:: E
definition: [blood]
---
>[!Note] DEFINITION of -em-
>blood
_____
>[!info]+ ETYMOLOGY of -em-
>#greek haima, haimatos
_____
>[!example]+ RELATED TERMS to -em-
>
>| [[-em-]]    | blood |
| ----------- | ----- |
| [[hem-]]    | YES   |
| [[sangui-]] | YES      |
_____
>[!tip]+ DERIVATIONS of -em-
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
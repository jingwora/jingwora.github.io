---
tags: [" #medroot"]
aliases: []
roots: [digit-]
forms: [combining]
alphabet:: D
definition: [finger, toe]
---
>[!Note] DEFINITION of digit-
>finger, toe
_____
>[!info]+ ETYMOLOGY of digit-
>#latin digitus
_____
>[!example]+ RELATED TERMS to digit-
>
>| [[digit-]] | finger | toe |
| ----------- | ------ | --- |
| [[dactyl-]]  | YES    | YES    |
_____
>[!tip]+ DERIVATIONS of digit-
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
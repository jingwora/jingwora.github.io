---
tags: [" #medroot"]
aliases: []
roots: [dactyl-]
forms: [combining]
alphabet:: D
definition: [finger, toe]
---
>[!Note] DEFINITION of dactyl-
>finger, toe
_____
>[!info]+ ETYMOLOGY of dactyl-
>#greek daktylos
_____
>[!example]+ RELATED TERMS to dactyl-
>
>| [[dactyl-]] | finger | toe |
| ----------- | ------ | --- |
| [[digit-]]  | YES    | YES    |
_____
>[!tip]+ DERIVATIONS of dactyl-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
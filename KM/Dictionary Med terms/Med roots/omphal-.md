---
tags: [" #medroot"]
aliases: []
roots: [omphal-]
forms: [combining]
alphabet:: O
definition: [navel, umibilicus]
---
>[!Note] DEFINITION of omphal-
>navel, umbilicus
_____
>[!info]+ ETYMOLOGY of omphal-
>#greek omphalos
_____
>[!example]+ RELATED TERMS to omphal-
>
_____
>[!tip]+ DERIVATIONS of omphal-
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
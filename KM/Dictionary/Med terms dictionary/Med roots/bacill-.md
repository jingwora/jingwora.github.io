---
tags: [" #medroot"]
aliases: []
roots: [bacill-]
forms: [combining]
alphabet:: B
definition: [bacillus, rod, staff]
---
>[!Note] DEFINITION of bacill-
>bacillus, rod, staff
_____
>[!info]+ ETYMOLOGY of bacill-
>#latin bacillus (rod, staff)
_____
>[!example]+ RELATED TERMS to bacill-
>
>| [[bacill-]] | rod | staff |
| ----------- | --- | ----- |
| [[rhabd-]]  | YES | -      |
_____
>[!tip]+ DERIVATIONS of bacill-
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
---
tags: [" #medroot"]
aliases: [-cuspid]
roots: [cusp-, -cuspid]
forms: [combining]
alphabet:: C
definition: [point]
---
>[!Note] DEFINITION of cusp-
>point
_____
>[!info]+ ETYMOLOGY of cusp-
>#latin cuspis, cuspidis
_____
>[!example]+ RELATED TERMS to cusp-
>
>| [[cusp-]]  | point | -    | -   |
| ---------- | ----- | ---- | --- |
| [[stigm-]] | YES   | mark | spot    |
_____
>[!tip]+ DERIVATIONS of cusp-
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
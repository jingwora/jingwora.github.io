---
tags: [" #medroot"]
aliases: []
roots: [all-]
forms: [combining]
alphabet:: A
definition: [other, divergence, difference from]
---
>[!Note] DEFINITION of all-
>other, divergence, difference from
_____
>[!info]+ ETYMOLOGY of all-
>#greek allos
_____
>[!example]+ RELATED TERMS to all-
>
>| [[all-]]    | other | divergence | difference from | -   |
| ----------- | ----- | ---------- | --------------- | --- |
| [[hetero-]] | YES   | -          | different       | relationship to another    |
_____
>[!tip]+ DERIVATIONS of all-
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
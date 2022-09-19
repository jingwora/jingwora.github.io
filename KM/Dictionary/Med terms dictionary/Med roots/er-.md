---
tags: [" #medroot"]
aliases: [erot-]
roots: [er-, erot-]
forms: [combining]
alphabet:: E
definition: [sexual desire]
---
>[!Note] DEFINITION of er-
>sexual desire
_____
>[!info]+ ETYMOLOGY of er-
>#greek eros, erotos
_____
>[!example]+ RELATED TERMS to er-
>
>|    [[er-]]    | sexual desire |
|:-------------:|:-------------:|
| [[aphrodis-]] | YES              |
_____
>[!tip]+ DERIVATIONS of er-
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
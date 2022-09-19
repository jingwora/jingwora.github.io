---
tags: [" #medroot"]
aliases: [aphrodisi-]
roots: [aphrodis-, aphrodisi-]
forms: [combining]
alphabet:: A
definition: [sexual desire]
---
>[!Note] DEFINITION of aphrodis-
>sexual desire
_____
>[!info]+ ETYMOLOGY of aphrodis-
>#greek aphrodisios
_____
>[!example]+ RELATED TERMS to aphrodis-
>
>| [[aphrodis-]] | sexual desire |
| ------------- | ------------- |
| [[er-]]       | YES              |
_____
>[!tip]+ DERIVATIONS of aphrodis-
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
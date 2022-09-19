---
tags: [" #medroot"]
aliases: [-derma, dermat-]
roots: [derm-, -derma, dermat-]
forms: [combining]
alphabet:: D
definition: [skin]
---
>[!Note] DEFINITION of derm-
>skin
_____
>[!info]+ ETYMOLOGY of derm-
>#greek derma, dermatos
_____
>[!example]+ RELATED TERMS to derm-
>
_____
>[!tip]+ DERIVATIONS of derm-
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
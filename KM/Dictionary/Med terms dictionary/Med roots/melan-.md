---
tags: [" #medroot"]
aliases: []
roots: [melan-]
forms: [combining]
alphabet:: M
definition: [menstruation]
---
>[!Note] DEFINITION of melan-
>menstruation
_____
>[!info]+ ETYMOLOGY of melan-
>#greek men (month)
_____
>[!example]+ RELATED TERMS to melan-
>
_____
>[!tip]+ DERIVATIONS of melan-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
---
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
---
tags: [" #medroot"]
aliases: [irid-]
roots: [ir-, irid-]
forms: [combining]
alphabet:: I
definition: [iris]
---
>[!Note] DEFINITION of ir-
>iris
_____
>[!info]+ ETYMOLOGY of ir-
>#greek iris, iridos (rainbow)
_____
>[!example]+ RELATED TERMS to ir-
>
_____
>[!tip]+ DERIVATIONS of ir-
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
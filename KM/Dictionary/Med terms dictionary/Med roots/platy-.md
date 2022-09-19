---
tags: [" #medroot"]
aliases: []
roots: [platy-]
forms: [combining]
alphabet:: P
definition: [flat]
---
>[!Note] DEFINITION of platy-
>flat
_____
>[!info]+ ETYMOLOGY of platy-
>#greek platys
_____
>[!example]+ RELATED TERMS to platy-
>
_____
>[!tip]+ DERIVATIONS of platy-
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
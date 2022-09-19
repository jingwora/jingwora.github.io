---
tags: [" #medroot"]
aliases: []
roots: [sep-]
forms: [combining]
alphabet:: S
definition: [be infected]
---
>[!Note] DEFINITION of sep-
>be infected
_____
>[!info]+ ETYMOLOGY of sep-
>#greek sepein (be putrid)
_____
>[!example]+ RELATED TERMS to sep-
>
_____
>[!tip]+ DERIVATIONS of sep-
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
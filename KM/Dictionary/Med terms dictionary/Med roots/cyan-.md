---
tags: [" #medroot"]
aliases: []
roots: [cyan-]
forms: [combining]
alphabet:: C
definition: [blue]
---
>[!Note] DEFINITION of cyan-
>blue
_____
>[!info]+ ETYMOLOGY of cyan-
>#greek kyanos
_____
>[!example]+ RELATED TERMS to cyan-
>
_____
>[!tip]+ DERIVATIONS of cyan-
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
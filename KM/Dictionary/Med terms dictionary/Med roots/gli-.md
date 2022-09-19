---
tags: [" #medroot"]
aliases: [-glia-]
roots: [gli-]
forms: [combining]
alphabet:: G
definition: [glia, neuroglia]
---
>[!Note] DEFINITION of gli-
>glia, neuroglia
_____
>[!info]+ ETYMOLOGY of gli-
>#greek glia (glue)
_____
>[!example]+ RELATED TERMS to gli-
>
_____
>[!tip]+ DERIVATIONS of gli-
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
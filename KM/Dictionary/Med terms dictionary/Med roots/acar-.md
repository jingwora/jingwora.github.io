---
tags: [" #medroot"]
aliases: []
roots: [acar-]
forms: [combining]
alphabet:: A
definition: [mite]
---
>[!Note] DEFINITION of acar-
>mite
_____
>[!info]+ ETYMOLOGY of acar-
>#greek akari
_____
>[!example]+ RELATED TERMS to acar-
>
_____
>[!tip]+ DERIVATIONS of acar-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
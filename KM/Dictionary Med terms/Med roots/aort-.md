---
tags: [" #medroot"]
aliases: []
roots: [aort-]
forms: [combining]
alphabet:: A
definition: [aorta]
---
>[!Note] DEFINITION of aort-
>aorta
_____
>[!info]+ ETYMOLOGY of aort-
>#greek aorte
_____
>[!example]+ RELATED TERMS to aort-
>
_____
>[!tip]+ DERIVATIONS of aort-
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
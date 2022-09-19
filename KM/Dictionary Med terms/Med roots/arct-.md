---
tags: [" #medroot"]
aliases: [arctat-]
roots: [arct-, arctat-]
forms: [combining]
alphabet:: A
definition: [compress]
---
>[!Note] DEFINITION of arct-
>compress
_____
>[!info]+ ETYMOLOGY of arct-
>#latin arctare, arctatus
_____
>[!example]+ RELATED TERMS to arct-
>
_____
>[!tip]+ DERIVATIONS of arct-
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
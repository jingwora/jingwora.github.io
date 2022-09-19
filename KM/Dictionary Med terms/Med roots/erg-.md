---
tags: [" #medroot"]
aliases: [ergon]
roots: [erg-, ergon]
forms: [combining]
alphabet:: E
definition: [action, work]
---
>[!Note] DEFINITION of erg-
>action, work
_____
>[!info]+ ETYMOLOGY of erg-
>#greek ergon
_____
>[!example]+ RELATED TERMS to erg-
>
_____
>[!tip]+ DERIVATIONS of erg-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0
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
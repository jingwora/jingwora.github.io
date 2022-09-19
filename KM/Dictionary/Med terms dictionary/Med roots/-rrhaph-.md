---
tags: [" #medroot"]
aliases: []
roots: [-rrhaph-]
forms: [combining]
alphabet:: R
definition: [suture]
---
>[!Note] DEFINITION of -rrhaph-
>suture
_____
>[!info]+ ETYMOLOGY of -rrhaph-
>#greek rhaptein
_____
>[!example]+ RELATED TERMS to -rrhaph-
>
_____
>[!tip]+ DERIVATIONS of -rrhaph-
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
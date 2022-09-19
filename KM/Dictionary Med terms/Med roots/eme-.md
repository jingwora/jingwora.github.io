---
tags: [" #medroot"]
aliases: []
roots: [eme-]
forms: [combining]
alphabet:: E
definition: [vomit]
---
>[!Note] DEFINITION of eme-
>vomit
_____
>[!info]+ ETYMOLOGY of eme-
>#greek emein
_____
>[!example]+ RELATED TERMS to eme-
>
_____
>[!tip]+ DERIVATIONS of eme-
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
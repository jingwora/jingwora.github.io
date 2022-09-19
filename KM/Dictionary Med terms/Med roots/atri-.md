---
tags: [" #medroot"]
aliases: []
roots: [atri-]
forms: [combining]
alphabet:: A
definition: [atrium]
---
>[!Note] DEFINITION of atri-
>atrium
_____
>[!info]+ ETYMOLOGY of atri-
>#latin atrium (entrance hall)
_____
>[!example]+ RELATED TERMS to atri-
>
_____
>[!tip]+ DERIVATIONS of atri-
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
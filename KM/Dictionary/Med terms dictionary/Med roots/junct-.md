---
tags: [" #medroot"]
aliases: []
roots: [junct-]
forms: [combining]
alphabet:: J
definition: [join]
---
>[!Note] DEFINITION of junct-
>join
_____
>[!info]+ ETYMOLOGY of junct-
>#latin jungere, junctus
_____
>[!example]+ RELATED TERMS to junct-
>
_____
>[!tip]+ DERIVATIONS of junct-
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
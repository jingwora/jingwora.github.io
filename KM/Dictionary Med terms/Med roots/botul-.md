---
tags: [" #medroot"]
aliases: []
roots: [botul-]
forms: [combining]
alphabet:: B
definition: [sausage]
---
>[!Note] DEFINITION of botul-
>sausage
_____
>[!info]+ ETYMOLOGY of botul-
>#latin botulus
_____
>[!example]+ RELATED TERMS to botul-
>
_____
>[!tip]+ DERIVATIONS of botul-
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
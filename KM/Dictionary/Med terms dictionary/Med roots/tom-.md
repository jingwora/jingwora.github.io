---
tags: [" #medroot"]
aliases: []
roots: [tom-]
forms: [combining]
alphabet:: T
definition: [a cutting, slice, incision]
---
>[!Note] DEFINITION of tom-
>a cutting, slice, incision
_____
>[!info]+ ETYMOLOGY of tom-
> #greek tome
_____
>[!example]+ RELATED TERMS to tom-
>
_____
>[!tip]+ DERIVATIONS of tom-
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
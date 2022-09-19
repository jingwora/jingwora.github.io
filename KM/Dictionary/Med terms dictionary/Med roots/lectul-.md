---
tags: [" #medroot"]
aliases: []
roots: [lectul-]
forms: [combining]
alphabet:: L
definition: [couch, bed]
---
>[!Note] DEFINITION of lectul-
>couch, bed
_____
>[!info]+ ETYMOLOGY of lectul-
>#latin lectulus
_____
>[!example]+ RELATED TERMS to lectul-
>
_____
>[!tip]+ DERIVATIONS of lectul-
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
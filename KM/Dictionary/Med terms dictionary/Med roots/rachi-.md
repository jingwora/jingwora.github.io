---
tags: [" #medroot"]
aliases: [rhachi-]
roots: [rachi-, rhachi-]
forms: [combining]
alphabet:: R
definition: [spine]
---
>[!Note] DEFINITION of rachi-
>spine
_____
>[!info]+ ETYMOLOGY of rachi-
>#greek rhachis
_____
>[!example]+ RELATED TERMS to rachi-
>
_____
>[!tip]+ DERIVATIONS of rachi-
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
---
tags: [" #medroot"]
aliases: [fascicul-]
roots: [fascicl-]
forms: [combining]
alphabet:: F
definition: [fasciculus]
---
>[!Note] DEFINITION of fascicl-
>fasciculus (slender bundle of fibers)
_____
>[!info]+ ETYMOLOGY of fascicl-
>#latin fasciculus (little bundle)
_____
>[!example]+ RELATED TERMS to fascicl-
>
_____
>[!tip]+ DERIVATIONS of fascicl-
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
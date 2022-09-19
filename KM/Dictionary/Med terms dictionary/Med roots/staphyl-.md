---
tags: [" #medroot"]
aliases: []
roots: [staphyl-]
forms: [combining]
alphabet:: S
definition: [uvula, palate, staphylococci]
---
>[!Note] DEFINITION of staphyl-
>1. uvula, palate
>2. [[staphyl-]]o[[cocc-|-coccus]] - bacteria shaped like a bunch of grapes
_____
>[!info]+ ETYMOLOGY of staphyl-
>#greek staphyle (bunch of grapes)
_____
>[!example]+ RELATED TERMS to staphyl-
>
_____
>[!tip]+ DERIVATIONS of staphyl-
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
---
tags: [" #medroot"]
aliases: []
roots: [choroid-]
forms: [combining]
alphabet:: C
definition: [choroid]
---
>[!Note] DEFINITION of choroid-
>choroid (thin vascular layer in eye)
_____
>[!info]+ ETYMOLOGY of choroid-
>#greek chorioeides (skinlike)
_____
>[!example]+ RELATED TERMS to choroid-
>
_____
>[!tip]+ DERIVATIONS of choroid-
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
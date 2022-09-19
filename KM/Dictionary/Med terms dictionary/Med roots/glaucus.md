---
tags: [" #medroot"]
aliases: []
roots: [glaucus]
forms: [combining]
alphabet:: G
definition: [bluish-gray]
---
>[!Note] DEFINITION of glaucus
>bluish-gray
_____
>[!info]+ ETYMOLOGY of glaucus
>#greek glaukos
_____
>[!example]+ RELATED TERMS to glaucus
>
_____
>[!tip]+ DERIVATIONS of glaucus
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
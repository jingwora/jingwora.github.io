---
tags: [" #medroot"]
aliases: []
roots: [fus-]
forms: [combining]
alphabet:: F
definition: [pour]
---
>[!Note] DEFINITION of fus-
>pour
_____
>[!info]+ ETYMOLOGY of fus-
>#latin fundere fusus
_____
>[!example]+ RELATED TERMS to fus-
>
_____
>[!tip]+ DERIVATIONS of fus-
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
---
tags: [" #medroot"]
aliases: []
roots: [mel-]
forms: [combining]
alphabet:: M
definition: [limb]
---
>[!Note] DEFINITION of mel-
>limb
_____
>[!info]+ ETYMOLOGY of mel-
>#greek melos
_____
>[!example]+ RELATED TERMS to mel-
>
_____
>[!tip]+ DERIVATIONS of mel-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
---
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
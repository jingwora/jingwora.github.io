---
tags: [" #medroot"]
aliases: []
roots: [pyel-]
forms: [combining]
alphabet:: P
definition: [renal pelvis]
---
>[!Note] DEFINITION of pyel-
>renal pelvis
_____
>[!info]+ ETYMOLOGY of pyel-
>#greek pyelos
_____
>[!example]+ RELATED TERMS to pyel-
>
_____
>[!tip]+ DERIVATIONS of pyel-
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
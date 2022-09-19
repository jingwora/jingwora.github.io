---
tags: [" #medroot"]
aliases: []
roots: [cholecyst-, chol-]
forms: []
alphabet:: 
definition: [gallbladder]
---
>[!Note] DEFINITION of cholecyst-
>[[chol-]][[-e]]-[[cyst-]] - gallbladder (gall/bile bladder)
_____
>[!info]+ ETYMOLOGY of cholecyst-
>
_____
>[!example]+ RELATED TERMS to cholecyst-
>
_____
>[!tip]+ DERIVATIONS of cholecyst-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
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
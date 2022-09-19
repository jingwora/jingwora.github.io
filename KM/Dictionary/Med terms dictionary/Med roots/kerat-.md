---
tags: [" #medroot"]
aliases: []
roots: [kerat-]
forms: [combining]
alphabet:: K
definition: [cornea]
---
>[!Note] DEFINITION of kerat-
>cornea (horn)
_____
>[!info]+ ETYMOLOGY of kerat-
>#greek keras, keratos
_____
>[!example]+ RELATED TERMS to kerat-
>
_____
>[!tip]+ DERIVATIONS of kerat-
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
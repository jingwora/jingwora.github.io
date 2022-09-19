---
tags: [" #medroot"]
aliases: []
roots: [ov-]
forms: [combining]
alphabet:: O
definition: [egg]
---
>[!Note] DEFINITION of ov-
>egg
_____
>[!info]+ ETYMOLOGY of ov-
>#latin ovum
_____
>[!example]+ RELATED TERMS to ov-
>
_____
>[!tip]+ DERIVATIONS of ov-
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
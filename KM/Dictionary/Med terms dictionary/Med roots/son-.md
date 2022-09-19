---
tags: [" #medroot"]
aliases: []
roots: [son-]
forms: [combining]
alphabet:: S
definition: [sound]
---
>[!Note] DEFINITION of son-
>sound
_____
>[!info]+ ETYMOLOGY of son-
>#latin sonus
_____
>[!example]+ RELATED TERMS to son-
>
>| [[son-]] | sound | - |
|:---------:|:-----:|:-----:|
| [[phon-]]  |   YES   | voice      |
_____
>[!tip]+ DERIVATIONS of son-
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
---
tags: [" #medroot"]
aliases: []
roots: [phob-]
forms: [combining]
alphabet:: P
definition: [fear]
---
>[!Note] DEFINITION of phob-
>(abnormal) fear
_____
>[!info]+ ETYMOLOGY of phob-
>#greek phobos
_____
>[!example]+ RELATED TERMS to phob-
>
_____
>[!tip]+ DERIVATIONS of phob-
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
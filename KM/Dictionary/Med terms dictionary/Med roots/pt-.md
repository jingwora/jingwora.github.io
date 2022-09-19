---
tags: [" #medroot"]
aliases: []
roots: [pt-]
forms: [combining]
alphabet:: P
definition: [fall, sag, drop, prolapse]
---
>[!Note] DEFINITION of pt-
>fall, sag, drop, prolapse
_____
>[!info]+ ETYMOLOGY of pt-
>#greek piptein
_____
>[!example]+ RELATED TERMS to pt-
>
_____
>[!tip]+ DERIVATIONS of pt-
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
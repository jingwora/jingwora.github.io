---
tags: [" #medroot"]
aliases: []
roots: [amni-]
forms: [combining]
alphabet:: A
definition: [fetal membrane, amniotic sac, amnion]
---
>[!Note] DEFINITION of amni-
>fetal membrane, amniotic sac, amnion
_____
>[!info]+ ETYMOLOGY of amni-
>#greek amnion
_____
>[!example]+ RELATED TERMS to amni-
>
_____
>[!tip]+ DERIVATIONS of amni-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
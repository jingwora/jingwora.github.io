---
tags: [" #medroot"]
aliases: [histi-]
roots: [hist-, histi-]
forms: [combining]
alphabet:: H
definition: [tissue]
---
>[!Note] DEFINITION of hist-
>tissue
_____
>[!info]+ ETYMOLOGY of hist-
>#greek histos (web)
_____
>[!example]+ RELATED TERMS to hist-
>
_____
>[!tip]+ DERIVATIONS of hist-
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
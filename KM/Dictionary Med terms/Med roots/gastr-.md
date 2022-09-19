---
tags: [" #medroot"]
aliases: []
roots: [gastr-]
forms: [combining]
alphabet:: G
definition: [stomach]
---
>[!Note] DEFINITION of gastr-
>stomach (see also: [[abdomin-]])
_____
>[!info]+ ETYMOLOGY of gastr-
>#greek gaster, gastros
_____
>[!example]+ RELATED TERMS to gastr-
>
_____
>[!tip]+ DERIVATIONS of gastr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
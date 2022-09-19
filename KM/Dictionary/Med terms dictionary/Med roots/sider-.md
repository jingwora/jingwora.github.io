---
tags: [" #medroot"]
aliases: []
roots: [sider-]
forms: [combining]
alphabet:: S
definition: [iron]
---
>[!Note] DEFINITION of sider-
>iron
_____
>[!info]+ ETYMOLOGY of sider-
>#greek sideros
>latin equivalent is ferr
_____
>[!example]+ RELATED TERMS to sider-
>
_____
>[!tip]+ DERIVATIONS of sider-
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
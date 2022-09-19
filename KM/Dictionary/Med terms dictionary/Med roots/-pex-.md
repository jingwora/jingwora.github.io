---
tags: [" #medroot"]
aliases: []
roots: [-pex-]
forms: [combining]
alphabet:: P
definition: [fixing, attachment]
---
>[!Note] DEFINITION of -pex-
>fixing, (surgical) attachment)
_____
>[!info]+ ETYMOLOGY of -pex-
>#greek pexis
_____
>[!example]+ RELATED TERMS to -pex-
>
_____
>[!tip]+ DERIVATIONS of -pex-
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
---
tags: [" #medroot"]
aliases: [guest-]
roots: [geus-, guest-]
forms: [combining]
alphabet:: G
definition: [taste]
---
>[!Note] DEFINITION of geus-
>taste
_____
>[!info]+ ETYMOLOGY of geus-
>#greek geuin
_____
>[!example]+ RELATED TERMS to geus-
>
_____
>[!tip]+ DERIVATIONS of geus-
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
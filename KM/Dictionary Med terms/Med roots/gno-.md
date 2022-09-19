---
tags: [" #medroot"]
aliases: [gnos-]
roots: [gno-, gnos-]
forms: [combining]
alphabet:: G
definition: [know]
---
>[!Note] DEFINITION of gno-
>know
_____
>[!info]+ ETYMOLOGY of gno-
>#greek gignoskein
_____
>[!example]+ RELATED TERMS to gno-
>
_____
>[!tip]+ DERIVATIONS of gno-
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
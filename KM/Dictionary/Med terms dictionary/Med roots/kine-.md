---
tags: [" #medroot"]
aliases: []
roots: [kine-]
forms: [combining]
alphabet:: K
definition: [move]
---
>[!Note] DEFINITION of kine-
>move 
>*see also: [[dynam-]], [[kines-]]*
_____
>[!info]+ ETYMOLOGY of kine-
>#greek kinein
_____
>[!example]+ RELATED TERMS to kine-
>
_____
>[!tip]+ DERIVATIONS of kine-
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
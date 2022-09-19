---
tags: [" #medroot"]
aliases: [kinesi-]
roots: [kines-]
forms: [combining]
alphabet:: K
definition: [movement, motion]
---
>[!Note] DEFINITION of kines-
>movement, motion 
>*see also: [[kine-]], [[dynam-]]*
_____
>[!info]+ ETYMOLOGY of kines-
>#greek kinesis
_____
>[!example]+ RELATED TERMS to kines-
>
_____
>[!tip]+ DERIVATIONS of kines-
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
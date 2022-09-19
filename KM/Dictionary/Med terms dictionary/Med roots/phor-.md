---
tags: [" #medroot"]
aliases: []
roots: [phor-]
forms: [combining]
alphabet:: P
definition: [bearing, carrying]
---
>[!Note] DEFINITION of phor-
>bearing, carrying
>*see also: [[fer-]], [[gest-]], [[lat-]]*
_____
>[!info]+ ETYMOLOGY of phor-
>#greek phoros
_____
>[!example]+ RELATED TERMS to phor-
>
_____
>[!tip]+ DERIVATIONS of phor-
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
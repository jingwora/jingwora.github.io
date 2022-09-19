---
tags: [" #medroot"]
aliases: []
roots: [idi-]
forms: [combining]
alphabet:: I
definition: [of one's self]
---
>[!Note] DEFINITION of idi-
>of one's self
>*see also: [[aut-]] (self)*
_____
>[!info]+ ETYMOLOGY of idi-
>#greek idios
_____
>[!example]+ RELATED TERMS to idi-
>
_____
>[!tip]+ DERIVATIONS of idi-
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
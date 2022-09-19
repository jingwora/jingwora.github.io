---
tags: [" #medroot"]
aliases: []
roots: [prot-]
forms: [combining]
alphabet:: P
definition: [first, primitive, early]
---
>[!Note] DEFINITION of prot-
>first, primitive, early
>*see also: [[arche-]] (origin)*
_____
>[!info]+ ETYMOLOGY of prot-
>#greek protos
_____
>[!example]+ RELATED TERMS to prot-
>
_____
>[!tip]+ DERIVATIONS of prot-
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
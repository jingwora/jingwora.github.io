---
tags: [" #medroot"]
aliases: []
roots: [cec-]
forms: [combining]
alphabet:: C
definition: [cecum]
---
>[!Note] DEFINITION of cec-
>cecum
>*see also: [[col-|colon-]]*
_____
>[!info]+ ETYMOLOGY of cec-
>#latin caecus (blind) *because it's where the sun don't shine*
_____
>[!example]+ RELATED TERMS to cec-
>
>|  [[cec-]]  | cecum |
|:----------:|:-----:|
| [[typhl-]] |  YES  |
_____
>[!tip]+ DERIVATIONS of cec-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
---
tags: [" #medroot"]
aliases: []
forms: [prefix]
roots: [exo-]
alphabet:: E
definition: [outside, from the outside, toward the outside]
---
>[!Note] DEFINITION of exo-
>outside, from the outside, toward the outside
>*see also: [[ex-]] (out of)*
_____
>[!info]+ ETYMOLOGY of exo-
>#greek
_____
>[!example]+ RELATED TERMS to exo-
>
_____
>[!tip]+ DERIVATIONS of exo-
>```dataview
>TABLE definition AS Definition 
>FROM -#medroot
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
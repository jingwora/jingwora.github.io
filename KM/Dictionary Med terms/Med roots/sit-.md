---
tags: [" #medroot"]
aliases: []
roots: [sit-]
forms: [combining]
alphabet:: S
definition: [food]
---
>[!Note] DEFINITION of sit-
>food
>*see also: [[trophe-]] (nourishment)*
_____
>[!info]+ ETYMOLOGY of sit-
>#greek sitos
_____
>[!example]+ RELATED TERMS to sit-
>
_____
>[!tip]+ DERIVATIONS of sit-
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
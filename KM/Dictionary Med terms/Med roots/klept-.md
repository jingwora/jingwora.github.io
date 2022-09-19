---
tags: [" #medroot"]
aliases: []
roots: [klept-]
forms: [combining]
alphabet:: K
definition: [steal, theft]
---
>[!Note] DEFINITION of klept-
>steal, theft
_____
>[!info]+ ETYMOLOGY of klept-
>#greek kleptein
_____
>[!example]+ RELATED TERMS to klept-
>
_____
>[!tip]+ DERIVATIONS of klept-
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
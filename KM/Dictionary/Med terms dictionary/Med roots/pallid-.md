---
tags: [" #medroot"]
aliases: []
roots: [pallid-]
forms: [combining]
alphabet:: P
definition: [pale, lacking color]
---
>[!Note] DEFINITION of pallid-
>pale, lacking color
_____
>[!info]+ ETYMOLOGY of pallid-
>#latin pallidus
_____
>[!example]+ RELATED TERMS to pallid-
>
_____
>[!tip]+ DERIVATIONS of pallid-
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
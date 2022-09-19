---
tags: [" #medroot"]
aliases: [bronchi-]
roots: [bronch-, bronchi-]
forms: [combining]
alphabet:: B
definition: [bronchus]
---
>[!Note] DEFINITION of bronch-
>bronchus
_____
>[!info]+ ETYMOLOGY of bronch-
>#greek (windpipe)
_____
>[!example]+ RELATED TERMS to bronch-
>
_____
>[!tip]+ DERIVATIONS of bronch-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
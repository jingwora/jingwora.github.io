---
tags: [" #medroot"]
aliases: []
roots: [-lytic]
forms: [compound suffix form, adjective]
alphabet:: L
definition: [pertaining to dissolution or decomposition, disintegration]
---
>[!Note] DEFINITION of -lytic
>forms adjectives: [[ly-]][[-tic]] - pertaining to dissolution or decomposition, disintegration
>*see also: [[-lysis]]*
_____
>[!info]+ ETYMOLOGY of -lytic
>
_____
>[!example]+ RELATED TERMS to -lytic
>
_____
>[!tip]+ DERIVATIONS of -lytic
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
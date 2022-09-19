---
tags: [" #medroot"]
aliases: []
roots: [-lysis]
forms: [compound suffix form, noun]
alphabet:: L
definition: [dissolution, reduction, decomposition, disintegration]
---
>[!Note] DEFINITION of -lysis
> forms nouns: [[ly-]][[-sis]] - dissolution, reduction, decomposition, disintegration
> *see also: [[-lytic]]*
_____
>[!info]+ ETYMOLOGY of -lysis
>
_____
>[!example]+ RELATED TERMS to -lysis
>
_____
>[!tip]+ DERIVATIONS of -lysis
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
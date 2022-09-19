---
tags: [" #medroot"]
aliases: []
roots: [capill-]
forms: [combining]
alphabet:: C
definition: [capillary]
---
>[!Note] DEFINITION of capill-
>capillary
>*see also: [[telangiosis]], [[telangioma]]*
_____
>[!info]+ ETYMOLOGY of capill-
>#latin capillus (hair)
_____
>[!example]+ RELATED TERMS to capill-
>
_____
>[!tip]+ DERIVATIONS of capill-
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
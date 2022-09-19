---
tags: [" #medroot"]
aliases: []
roots: [koni]
forms: [combining]
alphabet:: K
definition: [dust]
---
>[!Note] DEFINITION of koni
>dust
>*see also: [[coni-]]*
_____
>[!info]+ ETYMOLOGY of koni
>#greek konis
_____
>[!example]+ RELATED TERMS to koni
>
_____
>[!tip]+ DERIVATIONS of koni
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
---
tags: [" #medroot"]
aliases: []
roots: [-gn-]
forms: [combining]
alphabet:: G
definition: [be born]
---
>[!Note] DEFINITION of -gn-
>be born
>*see also: [[nat-]]*
_____
>[!info]+ ETYMOLOGY of -gn-
>#latin (g)nasci, natus
_____
>[!example]+ RELATED TERMS to -gn-
>
_____
>[!tip]+ DERIVATIONS of -gn-
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
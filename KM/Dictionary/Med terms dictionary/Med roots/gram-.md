---
tags: [" #medroot"]
aliases: []
roots: [gram-]
forms: [combining]
alphabet:: G
definition: [a record]
---
>[!Note] DEFINITION of gram-
>a record 
>*see also: [[graph-]]*
_____
>[!info]+ ETYMOLOGY of gram-
>#greek gramma (something written)
_____
>[!example]+ RELATED TERMS to gram-
>
_____
>[!tip]+ DERIVATIONS of gram-
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
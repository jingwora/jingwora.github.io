---
tags: [" #medroot"]
aliases: []
roots: [chondr-]
forms: [combining]
alphabet:: C
definition: [cartilage]
---
>[!Note] DEFINITION of chondr-
>cartilage
_____
>[!info]+ ETYMOLOGY of chondr-
>#greek chondros
_____
>[!example]+ RELATED TERMS to chondr-
>
_____
>[!tip]+ DERIVATIONS of chondr-
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
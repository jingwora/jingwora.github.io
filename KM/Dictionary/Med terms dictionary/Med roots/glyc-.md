---
tags: [" #medroot"]
aliases: []
roots: [glyc-]
forms: [combining]
alphabet:: G
definition: [sugar]
---
>[!Note] DEFINITION of glyc-
>sugar
_____
>[!info]+ ETYMOLOGY of glyc-
>#greek glykys
_____
>[!example]+ RELATED TERMS to glyc-
>
_____
>[!tip]+ DERIVATIONS of glyc-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
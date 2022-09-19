---
tags: [" #medroot"]
aliases: []
roots: [blephar-]
forms: [combining]
alphabet:: B
definition: [eyelid]
---
>[!Note] DEFINITION of blephar-
>eyelid
_____
>[!info]+ ETYMOLOGY of blephar-
>#greek blepharon
_____
>[!example]+ RELATED TERMS to blephar-
>
_____
>[!tip]+ DERIVATIONS of blephar-
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
---
tags: [" #medroot"]
aliases: []
roots: [prseud-]
forms: [combining]
alphabet:: P
definition: [false]
---
>[!Note] DEFINITION of prseud-
>false
_____
>[!info]+ ETYMOLOGY of prseud-
>#greek pseudes
_____
>[!example]+ RELATED TERMS to prseud-
>
_____
>[!tip]+ DERIVATIONS of prseud-
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
---
tags: [" #medroot"]
aliases: [bacteri-]
roots: [bacter-, bacteri-]
forms: [combining]
alphabet:: B
definition: [bacterium]
---
>[!Note] DEFINITION of bacter-
>bacterium
_____
>[!info]+ ETYMOLOGY of bacter-
>#greek bakterion (small staff)
_____
>[!example]+ RELATED TERMS to bacter-
>
_____
>[!tip]+ DERIVATIONS of bacter-
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
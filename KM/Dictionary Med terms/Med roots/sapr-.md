---
tags: [" #medroot"]
aliases: []
roots: [sapr-]
forms: [combining]
alphabet:: S
definition: [rotten, putrid, decaying]
---
>[!Note] DEFINITION of sapr-
>rotten, putrid, decaying
>*see also: [[necr-]]*
_____
>[!info]+ ETYMOLOGY of sapr-
>#greek sapros
_____
>[!example]+ RELATED TERMS to sapr-
>
_____
>[!tip]+ DERIVATIONS of sapr-
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
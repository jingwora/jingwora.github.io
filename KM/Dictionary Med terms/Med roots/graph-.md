---
tags: [" #medroot"]
aliases: []
roots: [graph-]
forms: [combining]
alphabet:: G
definition: [write, record]
---
>[!Note] DEFINITION of graph-
>write, record 
>*see also: [[gram-]]*
_____
>[!info]+ ETYMOLOGY of graph-
>#greek graphein
_____
>[!example]+ RELATED TERMS to graph-
>
_____
>[!tip]+ DERIVATIONS of graph-
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
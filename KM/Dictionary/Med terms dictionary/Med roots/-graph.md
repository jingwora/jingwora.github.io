---
tags: [" #medroot"]
aliases: []
roots: [-graph]
forms: [compound suffix form]
alphabet:: G
definition: [instrument for recording the activity of an organ]
---
>[!Note] DEFINITION of -graph
>forms nouns: [[graph-]] an instru[[-ment]] for recording the activity of an organ
>*see also: [[-tome]], [[-stat]], [[-scope]]*
_____
>[!info]+ ETYMOLOGY of -graph
>
_____
>[!example]+ RELATED TERMS to -graph
>
_____
>[!tip]+ DERIVATIONS of -graph
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
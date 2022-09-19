---
tags: [" #medroot"]
aliases: []
roots: [-scope]
forms: [compound suffix form, noun]
alphabet:: S
definition: [an instrument for examining]
---
>[!Note] DEFINITION of -scope
>forms nouns: [[scop-]][[-e]]- instrument for examining
>*see also: [[-graph]], [[-tome]], [[-stat]]*
_____
>[!info]+ ETYMOLOGY of -scope
>
_____
>[!example]+ RELATED TERMS to -scope
>
_____
>[!tip]+ DERIVATIONS of -scope
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
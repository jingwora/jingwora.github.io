---
tags: [" #medroot"]
aliases: []
roots: [-tomy]
forms: [compound suffix form, noun]
alphabet:: T
definition: [surgical incision]
---
>[!Note] DEFINITION of -tomy
>forms nouns: [[tom-]][[-y]] - surgical incision
_____
>[!info]+ ETYMOLOGY of -tomy
>
_____
>[!example]+ RELATED TERMS to -tomy
>
_____
>[!tip]+ DERIVATIONS of -tomy
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
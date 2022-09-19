---
tags: [" #medroot"]
aliases: []
roots: [-gen]
forms: [compound suffix form, noun]
alphabet:: G
definition: [substance that produces]
---
>[!Note] DEFINITION of -gen
>forms nouns: [[gen-]] - produce 
_____
>[!info]+ ETYMOLOGY of -gen
>
_____
>[!example]+ RELATED TERMS to -gen
>
_____
>[!tip]+ DERIVATIONS of -gen
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
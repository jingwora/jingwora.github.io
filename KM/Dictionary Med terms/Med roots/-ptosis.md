---
tags: [" #medroot"]
aliases: []
roots: [-ptosis]
forms: [compound suffix form, noun]
alphabet:: P
definition: [dropping, sagging]
---
>[!Note] DEFINITION of -ptosis
>forms nouns: [[pt-]][[-osis]] - dropping, sagging (of an organ or part)
_____
>[!info]+ ETYMOLOGY of -ptosis
>
_____
>[!example]+ RELATED TERMS to -ptosis
>
_____
>[!tip]+ DERIVATIONS of -ptosis
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
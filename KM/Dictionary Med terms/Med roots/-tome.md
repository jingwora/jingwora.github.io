---
tags: [" #medroot"]
aliases: []
roots: [-tome]
forms: [compound suffix form, noun]
alphabet:: T
definition: [surgical instrument for cutting]
---
>[!Note] DEFINITION of -tome
>forms nouns: [[tom-]][[-e]] - surgical instru[[-ment]] for cutting
_____
>[!info]+ ETYMOLOGY of -tome
>
_____
>[!example]+ RELATED TERMS to -tome
>
_____
>[!tip]+ DERIVATIONS of -tome
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
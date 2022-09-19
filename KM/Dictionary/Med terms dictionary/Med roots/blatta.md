---
tags: [" #medroot"]
aliases: []
roots: [blatta]
forms: [combining]
alphabet:: B
definition: [cockroach]
---
>[!Note] DEFINITION of blatta
>cockroach
_____
>[!info]+ ETYMOLOGY of blatta
>#latin blatta
_____
>[!example]+ RELATED TERMS to blatta
>
_____
>[!tip]+ DERIVATIONS of blatta
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
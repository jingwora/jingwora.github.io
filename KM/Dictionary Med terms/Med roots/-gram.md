---
tags: [" #medroot"]
aliases: []
roots: [-gram]
forms: [compound suffix form, nouns]
alphabet:: G
definition: [record of the activity of an organ]
---
>[!Note] DEFINITION of -gram
>forms nouns: [[gram-]] - a record of the activity of an organ (record)
_____
>[!info]+ ETYMOLOGY of -gram
>
_____
>[!example]+ RELATED TERMS to -gram
>
_____
>[!tip]+ DERIVATIONS of -gram
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
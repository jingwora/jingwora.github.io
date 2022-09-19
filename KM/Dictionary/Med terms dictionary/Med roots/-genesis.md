---
tags: [" #medroot"]
aliases: []
roots: [-genesis]
forms: [compound suffix form, noun]
alphabet:: G
definition: [formation, origin]
---
>[!Note] DEFINITION of -genesis
>forms nouns: [[gen-]][[-esis]] - formation, origin (state of formation)
_____
>[!info]+ ETYMOLOGY of -genesis
>
_____
>[!example]+ RELATED TERMS to -genesis
>
>| [[-genesis]] | formation | origin | -   |
| ------------ | --------- | ------ | --- |
| [[arche-]]   | -         | YES    | beginning    |
_____
>[!tip]+ DERIVATIONS of -genesis
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
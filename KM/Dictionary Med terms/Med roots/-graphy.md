---
tags: [" #medroot"]
aliases: []
roots: [-graphy]
forms: [compound suffix form, nouns]
alphabet:: G
definition: [recording of the activity of an organ, descriptive treatise]
---
>[!Note] DEFINITION of -graphy
>1. forms nouns: [[graph-]][[-y]] - recording of an organ's activity
>2. forms nouns: [[graph-]][[-y]] - descriptive treatise on a subject
_____
>[!info]+ ETYMOLOGY of -graphy
>
_____
>[!example]+ RELATED TERMS to -graphy
>
_____
>[!tip]+ DERIVATIONS of -graphy
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
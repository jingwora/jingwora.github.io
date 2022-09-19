---
tags: [" #medroot"]
aliases: []
roots: [-scopy]
forms: [compound suffix form, noun]
alphabet:: S
definition: [examination]
---
>[!Note] DEFINITION of -scopy
>forms nouns: [[scop-]][[-y]] - examination
_____
>[!info]+ ETYMOLOGY of -scopy
>
_____
>[!example]+ RELATED TERMS to -scopy
>
_____
>[!tip]+ DERIVATIONS of -scopy
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
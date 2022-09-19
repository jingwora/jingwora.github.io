---
tags: [" #medroot"]
aliases: []
roots: [-rrhexis]
forms: [compound suffix form, noun]
alphabet:: R
definition: [bursting, rupture]
---
>[!Note] DEFINITION of -rrhexis
>forms nouns: [[rhex-]]-is - bursting (of tissues), rupture
_____
>[!info]+ ETYMOLOGY of -rrhexis
>
_____
>[!example]+ RELATED TERMS to -rrhexis
>
_____
>[!tip]+ DERIVATIONS of -rrhexis
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
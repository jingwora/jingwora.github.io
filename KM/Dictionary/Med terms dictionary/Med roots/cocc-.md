---
tags: [" #medroot"]
aliases: [-coccus]
roots: [cocc-, -coccus]
forms: [combining]
alphabet:: C
definition: [coccus]
---
>[!Note] DEFINITION of cocc-
>coccus
_____
>[!info]+ ETYMOLOGY of cocc-
>#greek kokkos (berry)
_____
>[!example]+ RELATED TERMS to cocc-
>
_____
>[!tip]+ DERIVATIONS of cocc-
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
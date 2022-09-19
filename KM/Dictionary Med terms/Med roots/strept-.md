---
tags: [" #medroot"]
aliases: []
roots: [strept-]
forms: [combining]
alphabet:: S
definition: [streptococci]
---
>[!Note] DEFINITION of strept-
>[[strept-]]o[[cocc-|-coccus]] (twisted berry bacteria)
_____
>[!info]+ ETYMOLOGY of strept-
>#greek streptos (twisted)
_____
>[!example]+ RELATED TERMS to strept-
>
_____
>[!tip]+ DERIVATIONS of strept-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
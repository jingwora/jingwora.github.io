---
tags: [" #medroot"]
aliases: []
roots: [lagnia]
forms: [combining]
alphabet:: L
definition: [abnormal sexual excitation or gratification]
---
>[!Note] DEFINITION of lagnia
>abnormal sexual excitation or gratification
_____
>[!info]+ ETYMOLOGY of lagnia
>#greek lagneia
_____
>[!example]+ RELATED TERMS to lagnia
>
_____
>[!tip]+ DERIVATIONS of lagnia
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
---
tags: [" #medroot"]
aliases: []
roots: [amoeba]
forms: [combining]
alphabet:: A
definition: [amoeba]
---
>[!Note] DEFINITION of amoeba
>amoeba
_____
>[!info]+ ETYMOLOGY of amoeba
>#greek amoibe (change)
_____
>[!example]+ RELATED TERMS to amoeba
>
_____
>[!tip]+ DERIVATIONS of amoeba
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
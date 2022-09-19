---
tags: [" #medroot"]
aliases: [orex-]
roots: [orec-, orex-]
forms: [combining]
alphabet:: O
definition: [have an appetite, appetite]
---
>[!Note] DEFINITION of orec-
>have an appetite, appetite
_____
>[!info]+ ETYMOLOGY of orec-
>#greek oregein
_____
>[!example]+ RELATED TERMS to orec-
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```
_____
>[!tip]+ DERIVATIONS of orec-
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
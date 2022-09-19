---
tags: [" #medroot"]
aliases: [orche-, orchi-, orchid-, orchis-]
roots: [orch-, orche-, orchi-, orchid-, orchis-]
forms: [combining]
alphabet:: O
definition: [testicle]
---
>[!Note] DEFINITION of orch-
>testicle
_____
>[!info]+ ETYMOLOGY of orch-
>#greek orchis, orchios
_____
>[!example]+ RELATED TERMS to orch-
>
_____
>[!tip]+ DERIVATIONS of orch-
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
---
tags: [" #medroot"]
aliases: []
roots: [duodenal-]
forms: [combining]
alphabet:: D
definition: [of the duodenum]
---
>[!Note] DEFINITION of duodenal-
>[[duoden-]][[-al]] - of the duodenum
_____
>[!info]+ ETYMOLOGY of duodenal-
>#latin duodenalis
_____
>[!example]+ RELATED TERMS to duodenal-
>
_____
>[!tip]+ DERIVATIONS of duodenal-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]
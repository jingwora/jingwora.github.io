---
tags: [" #medroot"]
aliases: []
roots: [arachn-]
forms: [combining]
alphabet:: A
definition: [spider, web, arachnoid membrane]
---
>[!Note] DEFINITION of arachn-
>spider, web, arachnoid membrane
_____
>[!info]+ ETYMOLOGY of arachn-
>#greek arachne
_____
>[!example]+ RELATED TERMS to arachn-
>
_____
>[!tip]+ DERIVATIONS of arachn-
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
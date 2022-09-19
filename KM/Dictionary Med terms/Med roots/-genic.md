---
tags: [" #medroot"]
aliases: [-genous]
roots: [-genic]
forms: [compound suffix form, adjective]
alphabet:: G
definition: [causing, producing, caused by, produced by or in]
---
>[!Note] DEFINITION of -genic
>1. forms adjectives: [[gen-]][[-ic]] - causing, producing
>2. forms adjectives: [[gen-]][[-ous]] - caused by, produced by or in
_____
>[!info]+ ETYMOLOGY of -genic
>
_____
>[!example]+ RELATED TERMS to -genic
>
_____
>[!tip]+ DERIVATIONS of -genic
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
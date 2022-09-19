---
tags: [" #medroot"]
aliases: []
roots: [prostat-]
forms: [combining]
alphabet:: P
definition: [prostate gland]
---
>[!Note] DEFINITION of prostat-
>prostate gland
_____
>[!info]+ ETYMOLOGY of prostat-
>#greek prostates (one who stands before)
_____
>[!example]+ RELATED TERMS to prostat-
>
_____
>[!tip]+ DERIVATIONS of prostat-
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
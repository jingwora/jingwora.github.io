---
tags: [" #medroot"]
aliases: []
roots: [crypt-]
forms: [combining]
alphabet:: C
definition: [hidden, latent]
---
>[!Note] DEFINITION of crypt-
>hidden, latent
_____
>[!info]+ ETYMOLOGY of crypt-
>#greek kryptos
_____
>[!example]+ RELATED TERMS to crypt-
>
_____
>[!tip]+ DERIVATIONS of crypt-
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
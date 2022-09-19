---
tags: [" #medroot"]
aliases: []
roots: [splen-]
forms: [combining]
alphabet:: S
definition: [spleen]
---
>[!Note] DEFINITION of splen-
>spleen
>*see also: [[lien-]] (spleen)*
_____
>[!info]+ ETYMOLOGY of splen-
>#greek splen
_____
>[!example]+ RELATED TERMS to splen-
>
_____
>[!tip]+ DERIVATIONS of splen-
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
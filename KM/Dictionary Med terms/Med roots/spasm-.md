---
tags: [" #medroot"]
aliases: []
roots: [spasm-]
forms: [combining]
alphabet:: S
definition: [spasm, involuntary muscular contraction]
---
>[!Note] DEFINITION of spasm-
>spasm, involuntary muscular contraction
_____
>[!info]+ ETYMOLOGY of spasm-
>#greek spasmos
_____
>[!example]+ RELATED TERMS to spasm-
>
_____
>[!tip]+ DERIVATIONS of spasm-
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
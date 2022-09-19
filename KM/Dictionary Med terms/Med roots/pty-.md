---
tags: [" #medroot"]
aliases: []
roots: [pty-]
forms: [combining]
alphabet:: P
definition: [spit]
---
>[!Note] DEFINITION of pty-
>spit
>*see also: [[ptyal-]], [[sial-]] (saliva)*
_____
>[!info]+ ETYMOLOGY of pty-
>#greek ptyein
_____
>[!example]+ RELATED TERMS to pty-
>
_____
>[!tip]+ DERIVATIONS of pty-
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
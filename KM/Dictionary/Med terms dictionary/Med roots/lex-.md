---
tags: [" #medroot"]
aliases: []
roots: [lex-]
forms: [combining]
alphabet:: L
definition: [read]
---
>[!Note] DEFINITION of lex-
>read
_____
>[!info]+ ETYMOLOGY of lex-
>#greek legein
_____
>[!example]+ RELATED TERMS to lex-
>
_____
>[!tip]+ DERIVATIONS of lex-
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
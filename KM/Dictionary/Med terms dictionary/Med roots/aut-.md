---
tags: [" #medroot"]
aliases: []
roots: [aut-]
forms: [combining]
alphabet:: A
definition: [self]
---
>[!Note] DEFINITION of aut-
>self
>*see also: [[idi-]]*
_____
>[!info]+ ETYMOLOGY of aut-
>#greek autos
_____
>[!example]+ RELATED TERMS to aut-
>	
_____
>[!tip]+ DERIVATIONS of aut-
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
---
tags: [" #medroot"]
aliases: [phrag-]
roots: [phrac-, phrax-, phrag-]
forms: [combining]
alphabet:: P
definition: [enclose, obstruct]
---
>[!Note] DEFINITION of phrac-
>enclose, obstruct
>*see also: [[ob-]]*
_____
>[!info]+ ETYMOLOGY of phrac-
>#greek phrassein
_____
>[!example]+ RELATED TERMS to phrac-
>
_____
>[!tip]+ DERIVATIONS of phrac-
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
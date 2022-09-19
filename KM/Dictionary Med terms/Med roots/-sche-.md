---
tags: [" #medroot"]
aliases: []
roots: [-sche-]
forms: [combining]
alphabet:: S
definition: [suppress, check]
---
>[!Note] DEFINITION of -sche-
>suppress, check
>*see also: [[isch-]]*
_____
>[!info]+ ETYMOLOGY of -sche-
>#greek ischein
_____
>[!example]+ RELATED TERMS to -sche-
>
_____
>[!tip]+ DERIVATIONS of -sche-
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
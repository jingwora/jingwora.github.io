---
tags: [" #medroot"]
aliases: [frigor-]
roots: [frig-, frigor-]
forms: [combining]
alphabet:: F
definition: [cold]
---
>[!Note] DEFINITION of frig-
>cold (see also: [[cry-]])
_____
>[!info]+ ETYMOLOGY of frig-
>#latin frigus, frigoris
_____
>[!example]+ RELATED TERMS to frig-
>
_____
>[!tip]+ DERIVATIONS of frig-
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
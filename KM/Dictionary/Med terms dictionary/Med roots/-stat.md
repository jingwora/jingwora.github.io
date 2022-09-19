---
tags: [" #medroot"]
aliases: []
roots: [-stat]
forms: [combining]
alphabet:: S
definition: [device or agent for stopping the flow]
---
>[!Note] DEFINITION of -stat
>device or agent for stopping the flow (of something)
>*see also: [[sta-]] (stop)
>not to be confused with: [[statim]] (immediately)*
_____
>[!info]+ ETYMOLOGY of -stat
>#greek histanai
_____
>[!example]+ RELATED TERMS to -stat
>
_____
>[!tip]+ DERIVATIONS of -stat
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
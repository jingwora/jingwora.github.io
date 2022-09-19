---
tags: [" #medroot"]
aliases: [duc-]
forms: [combining]
roots: [duc-, duct-]
alphabet:: D
definition: [to lead, to bring, to conduct]
---
>[!Note] DEFINITION of duct-
>to lead, to bring, to conduct
_____
>[!info]+ ETYMOLOGY of duct-
>#latin ducere, ductus
_____
>[!example]+ RELATED TERMS to duct-
>
_____
>[!tip]+ DERIVATIONS of duct-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]